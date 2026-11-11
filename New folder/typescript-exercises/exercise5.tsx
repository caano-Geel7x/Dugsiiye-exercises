function echo<T>(input: T): T {
  return input;
}

console.log(echo("Hello"));
console.log(echo(42));
console.log(echo([1, 2, 3]));
console.log(echo({ name: "Amina", age: 20 }));

interface ApiResult<T> {
  status: string;
  data: T;
}

const messageResult: ApiResult<string> = {
  status: "success",
  data: "Loaded successfully",
};

const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Amina" },
};

console.log(messageResult);
console.log(userResult);

function first<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Cannot get the first item of an empty array.");
  }

  return items[0]!;
}

console.log(first([1, 2, 3]));
console.log(first(["a", "b", "c"]));
console.log(first([{ id: 1 }, { id: 2 }]));