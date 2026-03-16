import { greeting } from "@repro/shared";

export default function Home() {
  return <h1>{greeting("World")}</h1>;
}
