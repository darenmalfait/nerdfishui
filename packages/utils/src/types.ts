type Dict<T = any> = Record<string, T>

type CSSMap = Dict<{value: string; var: string; varRef: string}>

type WithCSSVar<T> = T & {
  cssVars: Dict
  cssMap: CSSMap
}

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type WalkObjectPredicate<Leaf = unknown> = (
  value: unknown,
  path: string[],
) => Leaf

type MappedLeavesObject<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Array<any>
    ? MappedLeavesObject<Obj[Prop][number], LeafType>[]
    : Obj[Prop] extends Record<string, unknown>
    ? MappedLeavesObject<Obj[Prop], LeafType>
    : LeafType
}

export type {
  Dict,
  CSSMap,
  WithCSSVar,
  DeepPartial,
  ExtractProps,
  MappedLeavesObject,
  WalkObjectPredicate,
}
