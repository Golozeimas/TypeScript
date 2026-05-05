let input: number | string;

input = 10

input = "10"

console.log(input)


function imprimirId(id: number | string) {
  console.log("ID:", id);
}

imprimirId(1);
imprimirId("A123");