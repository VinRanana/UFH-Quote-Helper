interface Mesh {
  name: string;
  area: number;
  intensity: number;
}

interface MeshCollection {
  [key: string]: Mesh;
}

const createMesh = (name: string, area: number, intensity: number): Mesh => {
  return {
    name,
    area,
    intensity,
  }
};

const mesh150Areas = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24];

const meshObj = mesh150Areas.reduce((resultObj: MeshCollection, mSquared: number): MeshCollection => {
  const mSquared100 = mSquared * 100;
  const naming = (mSquared < 10) ? `tsm_150_0${mSquared100}` : `tsm_150_${mSquared100}`;

  resultObj[naming] = createMesh(naming, mSquared, 150);

  return resultObj;
}, {});

console.log(meshObj.tsm_150_0100);