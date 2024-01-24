const { getInfo, getInfoFromPullRequest } = require('@changesets/get-github-info');

const repo = 'darenmalfait/nerdfishui';

const getDependencyReleaseLine = async (changesets, dependenciesUpdated) => {
  if (dependenciesUpdated.length === 0) return '';

  const changesetLink = `- Updated dependencies [${(
    await Promise.all(
      changesets.map(async cs => {
        if (cs.commit) {
          let { links } = await getInfo({
            repo,
            commit: cs.commit,
          });
          return links.commit;
        }
      }),
    )
  )
    .filter(_ => _)
    .join(', ')}]:`;

  const updatedDependenciesList = dependenciesUpdated.map(
    dependency => `  - ${dependency.name}@${dependency.newVersion}`,
  );

  return [changesetLink, ...updatedDependenciesList].join('\n');
};

const getReleaseLine = async (changeset, type, options) => {
  let prFromSummary;
  let commitFromSummary;

  const replacedChangelog = changeset.summary
    .replace(/^\s*(?:pr|pull|pull\s+request):\s*#?(\d+)/im, (_, pr) => {
      let num = Number(pr);
      if (!isNaN(num)) prFromSummary = num;
      return '';
    })
    .replace(/^\s*commit:\s*([^\s]+)/im, (_, commit) => {
      commitFromSummary = commit;
      return '';
    })
    .trim();

  const [firstLine, ...futureLines] = replacedChangelog.split('\n').map(l => l.trimRight());

  const links = await (async () => {
    if (prFromSummary !== undefined) {
      let { links } = await getInfoFromPullRequest({
        repo,
        pull: prFromSummary,
      });
      if (commitFromSummary) {
        links = {
          ...links,
          commit: `[\`${commitFromSummary}\`](https://github.com/${repo}/commit/${commitFromSummary})`,
        };
      }
      return links;
    }
    const commitToFetchFrom = commitFromSummary || changeset.commit;
    if (commitToFetchFrom) {
      let { links } = await getInfo({
        repo,
        commit: commitToFetchFrom,
      });
      return links;
    }
    return {
      commit: null,
      pull: null,
    };
  })();

  const prefix = links.pull === null ? '' : ` (${links.pull})`;

  return `\n\n- ${firstLine}${prefix ? `${prefix} \n` : ''}\n${futureLines.map(l => `  ${l}`).join('\n')}`;
};

const changelogFunctions = { getReleaseLine, getDependencyReleaseLine };
module.exports = changelogFunctions;