import { EitherOr } from "./EitherOr"

let testSimple : EitherOr<
	{ Tesla: boolean },
	{ Lovecraft: boolean }
>

testSimple = { Tesla: true }

testSimple = { Lovecraft: false }

// @ts-expect-error
testSimple = {
	Tesla: false,
	Lovecraft: true,
}

let testOptionalFields : EitherOr<
	{ label: string },
	{
		title: string
		subtitle?: string
	}
>

testOptionalFields = { label: `RandomLabel` }

testOptionalFields = {
	title: "Yops said the Cyclops",
	subtitle: "Nope, said the Pope",
}

// @ts-expect-error
testOptionalFields = {
	label: `RandomLabel`,
	subtitle: "Nope, said the Pope",
}

let testDiscriminatingFields : EitherOr<
	{
		advanced?: false
		title: string
		adornment?: string
	},
	{
		advanced: true
		render: () => string
	}
>

testDiscriminatingFields = { title: "Dropped a kid in the gravity well" }

testDiscriminatingFields = {
	advanced: false,
	title: "Once upon a Battlefield",
	adornment: `ThumbsUp`,
}

testDiscriminatingFields = {
	advanced: true,
	render() {
		return `RandomLabel`
	},
}

// @ts-expect-error
testDiscriminatingFields = {
	title: "Dropped a kid in the gravity well",
	advanced: true,
}

// @ts-expect-error
testDiscriminatingFields = {
	advanced: true,
	render() {
		return `RandomLabel`
	},
	adornment: `ThumbsUp`,
}

// @ts-expect-error
testDiscriminatingFields = {
	render() {
		return `RandomLabel`
	},
}
