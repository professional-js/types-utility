# AllOrNothing

`AllOrNothing` allows to require several keys to only occur together.
This is generally only useful when combined with a base type, and only makes sense with two or more properties on the inner type.

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
Base & AllOrNothing<{
	Tesla: boolean
	Lovecraft: boolean
}>
```

</td><td>

```ts
{
	...base,
	Tesla: true,
	Lovecraft: false,
}
```

</td><td>

```ts
{
	...base,
	Tesla: false,
}
```

```ts
{
	...base,
	Lovecraft: true,
}
```

</td></tr><tr><td>

```ts
Base & AllOrNothing<{
	title: string
	subtitle?: string
}>
```

</td><td>

```ts
{
	...base,
	title: "Yops said the Cyclops",
}
```

</td><td>

```ts
{
	...base,
	subtitle: "Nope, said the Pope",
}
```

</td></tr>
</tbody></table>
