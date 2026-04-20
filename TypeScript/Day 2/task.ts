function processValue(value: unknown): string | number | boolean {
  if (typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (typeof value === "number") {
    return value + 21;
  }

  if (typeof value === "boolean") {
    return !value;
  }

  return "Invalid type";
}

console.log(processValue("aditya")); 
console.log(processValue(10));      
console.log(processValue(true));     
console.log(processValue(false));    