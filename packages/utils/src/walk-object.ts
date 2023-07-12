import {isArray, isObject, MappedLeavesObject, WalkObjectPredicate} from './'

function walkObject<Target, LeafType>(
  target: Target,
  predicate: WalkObjectPredicate<LeafType>,
): MappedLeavesObject<Target, ReturnType<WalkObjectPredicate<LeafType>>> {
  function inner(value: unknown, path: string[] = []): any {
    if (isArray(value)) {
      return value.map((item, index) => inner(item, [...path, String(index)]))
    }

    if (isObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, child]) => [
          key,
          inner(child, [...path, key]),
        ]),
      )
    }

    return predicate(value, path)
  }

  return inner(target)
}

export {walkObject}
