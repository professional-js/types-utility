# EitherOr

`EitherOr` allows to define a dual type composed of two mutually exclusive sub-types.
This is mostly useful in combination with a base type.

<table><thead>
<tr><th>

Definition

</th><th>

Accept

</th><th>

Reject

</th></tr>
</thead><tbody>
<tr><td>

```ts
EitherOr<
	{ Tesla: boolean },
	{ Lovecraft: boolean }
>
```

</td><td>

```ts
{ Tesla: true }
```

```ts
{ Lovecraft: false }
```

</td><td>

```ts
{
	Tesla: false,
	Lovecraft: true,
}
```

</td></tr><tr><td>

```ts
EitherOr<
	{ label: ReactElement },
	{
		title: string
		subtitle?: string
	}
>
```

</td><td>

```ts
{ label: <RandomLabel /> }
```

```ts
{
	title: "Yops said the Cyclops",
	subtitle: "Nope, said the Pope",
}
```

</td><td>

```ts
{
	label: <RandomLabel />,
	subtitle: "Nope, said the Pope",
}
```

</td></tr><tr><td>

```ts
EitherOr<
	{
		advanced?: false
		title: string
		adornment?: ReactElement
	},
	{
		advanced: true
		render: () => ReactElement
	}
>
```

</td><td>

```ts
{ title: "Dropped a kid in the gravity well" }
```

```ts
{
	advanced: false,
	title: "Once upon a Battlefield",
	adornment: <ThumbsUp />,
}
```

```ts
{
	advanced: true,
	render() {
		return <RandomLabel />
	},
}
```

</td><td>

```ts
{
	title: "Dropped a kid in the gravity well",
	advanced: true,
}
```

```ts
{
	advanced: true,
	render() {
		return <RandomLabel />
	},
	adornment: <ThumbsUp />,
}
```

```ts
{
	render() {
		return <RandomLabel />
	},
}
```

</td></tr>
</tbody></table>
