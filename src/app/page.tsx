import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import DomainInput from "@/components/DomainInput";
import Footer from "@/components/Footer";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  // void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#000428] to-[#004e92] text-white">
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-[hsl(212,100%,70%)]">SSL</span> Certificate
            Checker
          </h1>
          <DomainInput />
        </div>
        <Footer />
      </main>
    </HydrateClient>
  );
}
