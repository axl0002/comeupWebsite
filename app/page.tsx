import Link from "next/link";
import {
  Brand,
  Chip,
  NeuCard,
  NeuWell,
  SiteFooter,
  StoreButtons,
} from "@/components/Neu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Comeup",
            operatingSystem: "iOS",
            applicationCategory: "HealthApplication",
            description:
              "Squad accountability: post a proof photo when you show up and it lands on your squad's home screens.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Brand />
        <div className="hidden gap-6 text-sm font-semibold text-muted sm:flex">
          <a href="#how" className="hover:text-accent-text">
            How it works
          </a>
          <Link href="/support" className="hover:text-accent-text">
            Support
          </Link>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-6xl flex-grow px-6">
        {/* Hero */}
        <section className="grid items-center gap-14 pb-16 pt-6 lg:grid-cols-2 lg:gap-20 lg:pt-14">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
            <Chip>squads · proof photos · home-screen widget</Chip>
            <h1 className="mt-7 text-[40px] font-extrabold leading-[1.05] tracking-[-1.4px] text-foreground sm:text-6xl">
              Lock in with
              <br />
              your squad.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Post a proof photo when you show up — the gym, the desk, the
              kitchen. It lands on your squad&apos;s home screens the second you
              do, and everyone can see who&apos;s been quiet.
            </p>
            <div className="mt-9 w-full">
              <StoreButtons />
            </div>
            <p className="mt-4 text-xs text-muted">
              Invite-only squads of up to 8. No followers, no feed of strangers.
            </p>
          </div>

          <WidgetMock />
        </section>

        {/* Features */}
        <section className="grid gap-6 py-10 sm:grid-cols-3">
          {[
            {
              title: "Squads, not followers",
              body: "A handful of people who actually know you. Share a code, lock in together.",
            },
            {
              title: "Proof on the home screen",
              body: "Every proof photo shows up in your squad's widget. You don't open an app to see who showed up — you see it.",
            },
            {
              title: "Days since lock-in",
              body: "One honest number per person. No streak theatre, no guilt trips — just who's been showing up.",
            },
          ].map((f) => (
            <NeuCard key={f.title} className="p-7">
              <h3 className="text-lg font-bold tracking-[-0.3px] text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
            </NeuCard>
          ))}
        </section>

        {/* How it works */}
        <section id="how" className="py-14">
          <h2 className="text-center text-3xl font-extrabold tracking-[-0.7px] text-foreground sm:text-4xl">
            How it works
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              ["Make a squad", "Start one, share the invite code, or join a friend's."],
              ["Show up, snap the proof", "Gym, deep work, eating clean, content — or your own categories."],
              ["It lands on every home screen", "Your squad sees it in their widget. Tap it to see the post."],
            ].map(([title, body], i) => (
              <div key={title} className="flex flex-col items-center text-center">
                <NeuWell className="flex h-14 w-14 items-center justify-center rounded-full">
                  <span className="text-lg font-extrabold text-accent-text">
                    {i + 1}
                  </span>
                </NeuWell>
                <h3 className="mt-5 font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote band */}
        <section className="py-10">
          <NeuWell className="rounded-[var(--radius-card)] px-8 py-10 text-center">
            <p className="mx-auto max-w-2xl text-xl italic leading-relaxed text-muted sm:text-2xl">
              &ldquo;The more you sweat in training, the less you bleed in
              war.&rdquo;
            </p>
          </NeuWell>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-center py-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.7px] text-foreground sm:text-4xl">
            Your squad is waiting.
          </h2>
          <p className="mt-3 max-w-md text-muted">
            Get the app, start a squad, and post your first proof today.
          </p>
          <div className="mt-8">
            <StoreButtons center />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* The home-screen widget, drawn in the site's own neumorphism: the medium
   layout (photo full height on the left, details beside it) and the
   "days since lock-in" card from the home feed. */
function WidgetMock() {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] flex-col items-center gap-6 lg:mx-0 lg:items-end">
      <NeuCard className="w-full max-w-[360px] p-3">
        <div className="flex gap-3">
          <div className="relative aspect-square w-[150px] shrink-0 overflow-hidden rounded-[18px] bg-gradient-to-br from-accent-bright via-accent to-accent-text">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,.45),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[15px] font-extrabold text-white drop-shadow">
              sam
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-between py-1">
            <Chip>
              <span className="text-accent-text">✓</span> 3 of 5 locked in
            </Chip>
            <div>
              <p className="text-[16px] font-bold tracking-[-0.2px] text-foreground">
                sam
              </p>
              <p className="text-xs font-semibold text-muted">🏋️ gym · 12m ago</p>
              <p className="mt-1 text-[11px] font-bold text-muted">2/5</p>
            </div>
          </div>
        </div>
      </NeuCard>

      <NeuCard className="w-full max-w-[300px] p-4 lg:-mr-6">
        <p className="mb-2 text-[15px] font-bold tracking-[-0.3px] text-foreground">
          days since lock-in
        </p>
        {[
          ["mia", "4 days", "text-muted"],
          ["jordan", "yesterday", "text-muted"],
          ["sam", "today", "text-accent-text"],
        ].map(([name, days, color], i) => (
          <div
            key={name}
            className={`flex items-center justify-between py-2.5 ${
              i > 0 ? "border-t border-[color:var(--border)]" : ""
            }`}
          >
            <span className="flex items-center gap-2.5">
              <span className="neu-inset-sm h-7 w-7 rounded-full" />
              <span className="text-[15px] font-bold text-foreground">{name}</span>
            </span>
            <span className={`text-sm font-bold ${color}`}>{days}</span>
          </div>
        ))}
      </NeuCard>
    </div>
  );
}
