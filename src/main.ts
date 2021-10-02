import "./style.css";

const myValue: string = "chris";
let myVariable: number = 1;
myVariable += 1;

let myBoolean: boolean = true;

let myRETest: RegExp = /foo/;

console.log(myVariable);

let myValues: number[] = [1, 2, 3];
let myValues2: Array<string> = ["a"];

interface Person {
  first: string;
  last: string;
}

const myPerson: Person = {
  first: "chris",
  last: "lacey",
};

// Record - Constructs an object type whose property keys are Keys and whose property
// values are Type. This utility can be used to map the properties of a type
// to another type.
const data: Record<number, string> = {
  10: "megan",
  20: "lori",
};

data[5] = "joe";

for (let i = 0; i < 10; i++) {
  console.log(i);
}

myValues.forEach((a) => console.log(a));
const multipliedValues = myValues.map((a) => a * 10);

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
