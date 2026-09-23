const user = {
      name: "Alice",
      address: {
            city: "NYC"
      }
};

console.log(user.address?.city);    // NYC
console.log(user.address?.zip);     // undefined (no error)
console.log(user.contact?.email);   // undefined
const nullValue = null;
console.log(nullValue ?? "default");// default
const zero = 0;
console.log(zero ?? "default");     // 0 (nullish only)
console.log(zero || "default");     // default (falsy)




