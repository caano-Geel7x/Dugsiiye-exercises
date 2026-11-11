type UserPageProps = {
  params: Promise<{ username: string }>;
};

export default async function DynamicUserPage({ params }: UserPageProps) {
  const { username } = await params;

  return <h1>Welcome, {username}</h1>;
}
