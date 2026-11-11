type BlogPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function CatchAllBlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return <h1>You visited: {slug.join("/")}</h1>;
}
