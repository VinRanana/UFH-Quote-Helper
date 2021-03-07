export interface Mesh {
  name: string;
  area: number;
  intensity: number;
  description: string;
}

interface MeshCollection {
  [key: string]: Mesh;
}


const mesh150Areas = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24];

function createMesh (name: string, area: number, intensity: number, description: string): Mesh {
  return {
    name,
    area,
    intensity,
    description
  }
}

export const MESH_OBJ = mesh150Areas.reduce((resultObj: MeshCollection, mSquared: number): MeshCollection => {
  const mSquared100 = mSquared * 100;
  const naming = (mSquared < 10) ? `TSM-150-0${mSquared100}` : `TSM-150-${mSquared100}`;

  resultObj[naming] = createMesh(naming, mSquared, 150, 'Self-adhesive mesh');

  return resultObj;
}, {});

export function determineRightMesh (meshObject: MeshCollection, heatedArea: number): Mesh {
  let bestFit: Mesh = {
    name: 'placeholder',
    area: 0,
    intensity: 0,
    description: 'placeholder'
  };
  
  for (const key in meshObject) {
    if (Object.prototype.hasOwnProperty.call(meshObject, key)) {
      const currentMesh = meshObject[key];
      const meshArea = currentMesh.area;
      
      if (meshArea > heatedArea) continue;
      if (meshArea === heatedArea) return currentMesh;
      if (currentMesh.area > bestFit.area) bestFit = currentMesh;
    }
  }
  return bestFit;
}


// function generateRandomMeshStr (meshObject: MeshCollection): string {
//   const keys = Object.keys(meshObject);
//   return meshObject[keys[ Math.floor(keys.length * Math.random())]].name;
// };

// export const randomMeshStr = generateRandomMeshStr(MESH_OBJ);
