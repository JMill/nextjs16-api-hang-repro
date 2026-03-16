import { client } from "@/lib/sanity";

export default async function StoriesPage() {
  let stories = [];
  try {
    stories = await client.fetch('*[_type == "story"][0..5]{ _id, title }');
  } catch {
    // Sanity not configured — fine
  }
  return (
    <div>
      <h1>Stories ({stories?.length ?? 0})</h1>
    </div>
  );
}
