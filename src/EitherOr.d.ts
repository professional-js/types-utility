export type EitherOr<E, O> = (
	| (O & { [k in Exclude<keyof E, keyof O>]?: never})
	// by putting the first param second, it gets precedence
	// that means: if both are used, O is declared as the error
	| (E & { [k in Exclude<keyof O, keyof E>]?: never})
)
