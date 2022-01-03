// Optional operator: ? makes the field optional. This MUST come at the end of all the parameters
function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more");

// Optional fields in an interface
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

//  If you know better than TS, then you can put ! at the end. 
// ! Use with caution
function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return "";
}

// Same functionality as above, but with the nullish coalescing operator ??
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

// Optional Callback
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}