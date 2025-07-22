
import { HydrateClient } from "@/trpc/server";
import { ModeToggle } from '../components/mode-toggle';

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC Test" });

  // await api.ai.test({text: "What is the meaning of life?"});

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <ModeToggle />
        {/* {JSON.stringify((await api.ai.test({text: "Tell me a joke."})).choices[0]?.message, null, 2)} */}
        Hello world!
      </main>
    </HydrateClient>
  );
}
