interface Coordinate {
  x: number;
  y: number;
}

// we stack different function parameters, then we handle for different
// possibilities in the logic in the last one

export function parseCoordinate(str: string): Coordinate;
export function parseCoordinate(obj: Coordinate): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
//? unknown is like a safe any. It is like an any that you have to cast before you use it
//? adding a ? after the argument allows for the argument to be optional
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:12,y:22"));

