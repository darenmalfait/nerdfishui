# Nerdfish UI Engineering Rules

Modular, machine-readable engineering rules for this design-system monorepo.

## Structure

Rules are organized by section prefix, as defined in `_sections.md`:

| Prefix          | Section         | Impact      |
| --------------- | --------------- | ----------- |
| `architecture-` | Architecture    | CRITICAL    |
| `quality-`      | Code Quality    | CRITICAL    |
| `data-`         | Data Layer      | HIGH        |
| `api-`          | API Design      | HIGH        |
| `performance-`  | Performance     | HIGH        |
| `testing-`      | Testing         | MEDIUM-HIGH |
| `patterns-`     | Design Patterns | MEDIUM      |
| `culture-`      | Team Culture    | MEDIUM      |
| `ci-`           | CI/CD           | HIGH        |
| `reference-`    | Reference       | LOW         |

## Files

- `_sections.md` - Defines all sections, their ordering, and impact levels
- `_template.md` - Template for creating new rules
- `{section}-{rule-name}.md` - Individual rule files

## Rule Format

Each rule file follows a consistent format with YAML frontmatter:

```markdown
---
title: Rule Title Here
impact: CRITICAL | HIGH | MEDIUM | LOW
impactDescription: Optional description (e.g., "20-50% improvement")
tags: tag1, tag2, tag3
---

## Rule Title Here

**Impact: LEVEL (optional description)**

Brief explanation of the rule and why it matters.

**Incorrect (description):** \`\`\`typescript // Bad code example \`\`\`

**Correct (description):** \`\`\`typescript // Good code example \`\`\`

Reference: [Link](url)
```

## Adding New Rules

1. Copy `_template.md` to a new file with the appropriate section prefix
2. Fill in the frontmatter (title, impact, tags)
3. Write a clear explanation of the rule
4. Provide incorrect and correct code examples from this repo
5. Add a reference link if applicable (`AGENTS.md`, a source file, or a doc)

## Usage

These rules are designed to be:

- **Human-readable**: Engineers can browse and learn from them
- **Machine-readable**: AI agents can parse and apply them
- **Modular**: Individual rules can be updated without affecting others
- **Versionable**: Changes are tracked in git history

## Core Principles

> Ship a coherent, tree-shakeable component library. Match existing
> `@nerdfish/react` / `@nerdfish/utils` patterns, keep diffs small, use semantic
> tokens, and don't invent app architecture (auth, CMS, ORM, tRPC) this repo
> doesn't have.

Canonical content lives under `agents/`. `.cursor/rules` and `.claude/rules` are
symlinks here — never duplicate rule bodies.
