import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/* The site's primitives, named after the app's: a raised card, a button
   that sinks, a chip, a pressed-in well. Colours and depths come from
   globals.css. */

export function NeuCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`neu-card rounded-[var(--radius-card)] ${className}`}>
      {children}
    </div>
  );
}

export function NeuWell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`neu-inset rounded-[var(--radius-control)] ${className}`}>
      {children}
    </div>
  );
}

export function Chip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`neu-chip inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold text-muted ${className}`}
    >
      {children}
    </span>
  );
}

/* Standard raised button: grey label; `primary` gives it the accent label,
   as PrimaryButton does in the app. */
export function NeuButton({
  href,
  children,
  primary = false,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
  external?: boolean;
  className?: string;
}) {
  const classes = `neu-button inline-flex h-[60px] items-center justify-center gap-3 px-7 text-[16px] font-bold tracking-[-0.1px] ${
    primary ? "text-accent-text" : "text-muted"
  } ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/* The store buttons. Without a link yet the button says so instead of
   pointing nowhere. */
export function StoreButtons({ center = false }: { center?: boolean }) {
  const apple = process.env.NEXT_PUBLIC_APP_STORE_URL;
  const play = process.env.NEXT_PUBLIC_PLAY_STORE_URL;
  return (
    <div
      className={`flex flex-wrap gap-4 ${center ? "justify-center" : "justify-center lg:justify-start"}`}
    >
      {apple ? (
        <NeuButton href={apple} external primary>
          <AppleMark />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] font-semibold text-muted">
              Download on the
            </span>
            <span className="text-[17px]">App Store</span>
          </span>
        </NeuButton>
      ) : (
        <span className="neu-inset inline-flex h-[60px] items-center gap-3 rounded-[var(--radius-control)] px-7 text-[16px] font-bold text-inactive">
          <AppleMark />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] font-semibold">App Store</span>
            <span className="text-[17px]">Coming soon</span>
          </span>
        </span>
      )}
      {play ? (
        <NeuButton href={play} external>
          <span className="text-[17px]">Google Play</span>
        </NeuButton>
      ) : null}
    </div>
  );
}

function AppleMark() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className="h-7 w-7" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 98 123.2 25.3-1.8 44.7-16 83.2-15.6 38.6.4 52.3 15.2 89.8 13.8 44.5-1.2 75.9-67.4 85-88.1-37.6-11.2-61.9-53-61.5-98.7H318.7zm-40.1-209.7c7.8-12.1 27.2-39.2 26-80.1-34.5 3.8-67.6 34.4-85 58-7.5 10.1-17.8 28-15.3 58.6 39.4 1.4 69.4-19.1 74.3-36.5z" />
    </svg>
  );
}

/* Logo: the app icon in a raised tile with the wordmark. */
export function Brand({ size = 40 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span
        className="neu-chip overflow-hidden rounded-[12px]"
        style={{ width: size, height: size }}
      >
        <Image src="/icon.png" alt="" width={size} height={size} priority />
      </span>
      <span className="text-[20px] font-extrabold tracking-[-0.5px] text-foreground">
        comeup
      </span>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Joywise Labs Limited</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-accent-text">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-accent-text">
            Terms
          </Link>
          <Link href="/support" className="hover:text-accent-text">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* Long-text pages: back link, title, the text in one raised card. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Brand />
        <Link
          href="/"
          className="text-sm font-semibold text-muted hover:text-accent-text"
        >
          ← Back
        </Link>
      </nav>
      <main className="mx-auto w-full max-w-3xl flex-grow px-6 pb-16 pt-4">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-[-0.7px] text-foreground sm:text-4xl">
            {title}
          </h1>
          {updated ? (
            <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
          ) : null}
        </header>
        <NeuCard className="legal p-6 sm:p-10">{children}</NeuCard>
      </main>
      <SiteFooter />
    </div>
  );
}
