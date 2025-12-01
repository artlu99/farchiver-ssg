export const formatEOA = (value?: string | null, digits?: number): string =>
	value
		? `${value.slice(0, (digits ?? 4) + 2)}...${value.slice(
				value.length - (digits ?? 4),
			)}`
		: "";
