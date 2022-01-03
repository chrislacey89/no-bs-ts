// Basic Function
function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

// Named export with default parameter
export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// Function with Union Type - Second Param is String or Number
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// Function with No return value
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Function that resolves to a promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

// Function with Spread Operator - Array of Strings
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// Function with optional chaining and nullish coalescing
export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
}
