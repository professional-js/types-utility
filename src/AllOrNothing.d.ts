import type { EitherOr } from "./EitherOr"

// The type `{}` is necessary, as opposed to Record,
// because Record would just widen the resulting type to any Record,
// which would make this useless
export type AllOrNothing<T> = EitherOr<{}, T>
