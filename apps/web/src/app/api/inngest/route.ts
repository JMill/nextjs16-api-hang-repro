import { serve } from "inngest/next";
import { Inngest } from "inngest";

const inngest = new Inngest({ id: "repro" });

const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello" },
  async ({ event }) => {
    return { message: `Hello ${event.name}!` };
  },
);

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [helloWorld],
});
