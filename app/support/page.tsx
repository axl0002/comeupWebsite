import type { Metadata } from "next";
import { LegalPage, NeuButton } from "@/components/Neu";

export const metadata: Metadata = {
  title: "Support — Comeup",
  description: "Help with the Comeup app.",
};

const SUPPORT = "support@getcomeup.com";

export default function SupportPage() {
  return (
    <LegalPage title="Support">
      <h2>Get in touch</h2>
      <p>
        Having trouble with the app, a question about your subscription, or an
        idea for us? Email and a person will reply, usually within a day or two.
      </p>
      <div className="mt-6">
        <NeuButton href={`mailto:${SUPPORT}`} primary>
          Email support
        </NeuButton>
        <p className="mt-3 text-sm">
          or write to <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>
        </p>
      </div>

      <h2>Common questions</h2>
      <ul>
        <li>
          <strong>The widget isn&apos;t updating.</strong> Open the app once;
          it refreshes the widget straight away. Widgets also update on their
          own every quarter hour or so, at the system&apos;s discretion.
        </li>
        <li>
          <strong>I can&apos;t see a squad-mate&apos;s proof.</strong> Proofs
          only show to current squad members. Check you are both still in the
          squad and that neither of you has blocked the other.
        </li>
        <li>
          <strong>Restoring a subscription.</strong> Settings → Membership →
          Restore purchase, signed in with the same Apple ID you bought with.
        </li>
        <li>
          <strong>Referral codes.</strong> Both of you get free days when a code
          is redeemed. Your code is under Settings → Membership.
        </li>
        <li>
          <strong>Reporting content or a person.</strong> Open their profile or
          the post and use Report or Block. Reports are reviewed by a person.
        </li>
        <li>
          <strong>Deleting your account.</strong> Settings → Delete account, or
          email us from the address on your account and we&apos;ll do it.
        </li>
      </ul>
    </LegalPage>
  );
}
