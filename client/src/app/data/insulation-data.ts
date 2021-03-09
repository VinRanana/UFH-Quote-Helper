import { OutputItem } from '../output-item.model';

const items = {
  fta: 5,
  'CIB-006-20': 14.4,
  'CIB-105-10': 7.2,
  'TIB-006-08': 5.76,
  'TIB-010-06': 4.32,
  fs: 72,
  mfw: 7.2
};

export function determineRightBoard (
  floorArea: number,
  floorSubstrate: string,
  insulationDepth: string
): OutputItem {

  const resultItem = {
    name: 'placeholder',
    quantity: 0,
    description: 'placeholder'
  };

  if (floorSubstrate === 'Concrete') {
    resultItem.description = 'Concrete insulation boards';
    resultItem.name =
      insulationDepth === 'six'
      ? 'CIB-006-20'
      : 'CIB-105-10';
  }
  else if (floorSubstrate === 'Timber') {
    resultItem.description = 'Timber insulation boards';
    resultItem.name =
      insulationDepth === 'six'
      ? 'TIB-006-08'
      : 'TIB-010-06';
  }

  resultItem.quantity = calculateQuantity(resultItem.name, floorArea);

  return resultItem;
}

export function calculateQuantity (item: string, floorArea: number): number {
  const divisor = items[item];
  return Math.ceil(floorArea * 1.1 / divisor);
}
