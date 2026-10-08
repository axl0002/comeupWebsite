import Link from "next/link";
import { QuoteRotator } from "@/components/QuoteRotator";
import { SiteFooter, StoreButtons } from "@/components/Neu";
import { getQuotes } from "@/lib/quotes";

export const revalidate = 3600;

export default async function Home() {
  const quotes = await getQuotes();
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="mx-auto flex w-full max-w-6xl justify-end px-6 py-6">
        <Link
          href="/"
          className="text-[17px] font-bold tracking-[-0.4px] text-muted"
        >
          comeup
        </Link>
      </nav>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <QuoteRotator quotes={quotes} />
        <p className="mt-12 text-lg font-medium text-muted">
          lock in with your friends.
        </p>
        <div className="mt-8">
          <StoreButtons center />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
