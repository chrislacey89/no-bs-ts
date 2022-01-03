import houses from './data/houses'
// Interfaces
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}
// Parameter types
type Input = string | House[];
type FilterFn = (house: House) => boolean;

// Begin function overload
function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  houses: House[],
  filter: (house: House) => boolean
): HouseWithID[];


// Begin implementation
function findHouses(input: Input, filter?: FilterFn): HouseWithID[] {
  if (typeof input === "string") input = JSON.parse(input);
  let housesWithID: HouseWithID[] = (input as House[]).map((house, id) => ({
    id,
    ...house,
  }));
  housesWithID = filter ? housesWithID.filter(filter) : housesWithID;
  return housesWithID;
}

// Console logs
console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
