export default async function SlowStreamingComponent() {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 3000);
  });

  return <p>The slow server-rendered content has loaded.</p>;
}
