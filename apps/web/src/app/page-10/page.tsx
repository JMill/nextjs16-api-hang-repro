import { client } from "@/lib/sanity";
import { greeting } from "@repro/shared";

export default async function Page10() {
  let data = null;
  try { data = await client.fetch('*[_type == "story"][$i]{ _id }'); } catch {}
  return <div><h1>{greeting("Page 10")}</h1><p>{JSON.stringify(data)}</p></div>;
}
