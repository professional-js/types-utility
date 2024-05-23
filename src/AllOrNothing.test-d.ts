import { AllOrNothing } from "./AllOrNothing"

const base = {
	[Symbol()]: `Base`
}
type Base = typeof base

let testBasic : Base & AllOrNothing<{
	Tesla: boolean
	Lovecraft: boolean
}>

testBasic = {
	...base,
	Tesla: true,
	Lovecraft: false,
}

// @ts-expect-error
testBasic = {
	...base,
	Tesla: false,
}

// @ts-expect-error
testBasic = {
	...base,
	Lovecraft: true,
}

let testOptionalFields : Base & AllOrNothing<{
	title: string
	subtitle?: string
}>

testOptionalFields = {
	...base,
	title: "Yops said the Cyclops",
}

// @ts-expect-error
testOptionalFields = {
	...base,
	subtitle: "Nope, said the Pope",
}
