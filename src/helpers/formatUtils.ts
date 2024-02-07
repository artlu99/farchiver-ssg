export const formatNumber = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

export const shortenHash = (value?: string | null, digits?: number): string =>
  value
    ? `${value.slice(0, digits ?? 4)}...${value.slice(
        value.length - (digits ?? 4)
      )}`
    : ''
