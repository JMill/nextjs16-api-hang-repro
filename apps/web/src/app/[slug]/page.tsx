// Dynamic catch-all page — same pattern as tee-site's src/app/[slug]/page.tsx
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <h1>Page: {slug}</h1>;
}
