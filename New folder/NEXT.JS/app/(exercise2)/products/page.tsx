type Product = {
  id: number;
  title: string;
};

type ProductsResponse = {
  products: Product[];
};

export const dynamic = "force-dynamic";

export default async function ProductsServerPage() {
  const response = await fetch("https://dummyjson.com/products?limit=5");

  if (!response.ok) {
    throw new Error(`Failed to load products: ${response.status}`);
  }

  const { products }: ProductsResponse = await response.json();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        <a href="/exercise2">Back to Exercise 2</a>
      </p>
      <h1>Five Products</h1>
      <ul>
        {products.slice(0, 5).map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
