import { client } from "@/lib/sanity";
import { greeting } from "@repro/shared";

export default async function Page4() {
  let data = null;
  try { data = await client.fetch('*[_type == "story"][$i]{ _id }'); } catch {}
  return <div><h1>{greeting("Page 4")}</h1><p>{JSON.stringify(data)}</p></div>;
}
