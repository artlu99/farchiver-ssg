export const addressesEqual = (address1: string, address2: string): boolean =>
  address1.toLowerCase() === address2.toLowerCase()

export const formatEOA = (value?: string | null, digits?: number): string =>
  value
    ? `${value.slice(0, (digits ?? 4) + 2)}...${value.slice(
        value.length - (digits ?? 4)
      )}`
    : ''
