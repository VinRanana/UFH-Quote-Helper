import { OutputItem } from '../output-item.model';


interface Mesh {
  name: string;
  area: number;
  intensity: number;
}

interface MeshCollection {
  [key: string]: Mesh;
}


const mesh150Areas = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24];

function createMesh (name: string, area: number, intensity: number): Mesh {
  return {
    name,
    area,
    intensity
  };
}


export const MESH_OBJ = mesh150Areas.reduce((resultObj: MeshCollection, mSquared: number): MeshCollection => {
  const mSquared100 = mSquared * 100;
  const naming = (mSquared < 10) ? `TSM-150-0${mSquared100}` : `TSM-150-${mSquared100}`;

  resultObj[naming] = createMesh(naming, mSquared, 150);

  return resultObj;
}, {});

export function determineRightMesh (meshObject: MeshCollection, heatedArea: number): OutputItem {
  let bestFit: Mesh = {
    name: 'placeholder',
    area: 0,
    intensity: 0
  };

  const resultItem: OutputItem = {
    name: '',
    quantity: 1,
    description: 'Self-adhesive mesh'
  };

  for (const key in meshObject) {
    if (Object.prototype.hasOwnProperty.call(meshObject, key)) {
      const currentMesh = meshObject[key];
      const meshArea = currentMesh.area;

      if (meshArea > heatedArea) continue;
      if (meshArea === heatedArea) {
        resultItem.name = currentMesh.name;
        return resultItem;
      }
      if (currentMesh.area > bestFit.area) bestFit = currentMesh;
    }
  }

  resultItem.name = bestFit.name;
  return resultItem;
}
