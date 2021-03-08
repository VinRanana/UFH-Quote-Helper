const items = {
  fta: 5,
  cib: 7.2,
  tib: 4.32,
  fs: 72,
  mfw: 7.2
}

export function calculateQuantity (item: string, floorArea: number): number {
  const divisor = items[item];
  return Math.ceil(floorArea * 1.1 / divisor);
}
