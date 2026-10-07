import type { Metadata } from "next";
import { LegalPage } from "@/components/Neu";

export const metadata: Metadata = {
  title: "Terms of Service — Comeup",
  description: "The terms for using the Comeup app.",
};

const SUPPORT = "support@getcomeup.com";

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="October 7, 2026">
      <h2>1. Acceptance of terms</h2>
      <p>
        These terms are an agreement between you and Joywise Labs Limited
        (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) for the Comeup mobile
        app and website (the &quot;Service&quot;). By creating an account or
        using the Service you agree to them and to our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree, do not use
        the Service.
      </p>

      <h2>2. Accounts and eligibility</h2>
      <p>
        You must be at least 13 years old, or the minimum age to use such
        services in your country, to have an account. You sign in with Apple or
        Google and are responsible for keeping that sign-in secure and for what
        happens under your account. Give us accurate information and tell us
        promptly if your account is compromised.
      </p>

      <h2>3. Squads and your content</h2>
      <p>
        Comeup lets small, invite-only squads share proof photos and videos
        (&quot;proofs&quot;). You own what you post. By posting, you give us a
        licence to store, process and show your proofs, captions, reactions and
        comments to the members of the squads you share them in, and to operate
        the Service (for example through the home-screen widget and push
        notifications). The licence ends when you delete the content or your
        account, except for copies in routine backups for a short time.
      </p>
      <p>
        Anyone in a squad may edit its name, description and featured
        categories. Squad members can see each other&apos;s proofs; you can
        block a person to stop seeing theirs and sharing yours with them, and
        you can report content that breaks these terms.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>post anything unlawful, sexually explicit, violent, hateful,
          harassing, or that infringes someone else&apos;s rights or privacy;</li>
        <li>post photos of other people without their consent, or of anyone
          under 18 in a way that could put them at risk;</li>
        <li>impersonate anyone, misrepresent a proof, or use the Service to
          deceive your squad or us;</li>
        <li>attempt to break, overload, scrape or reverse-engineer the Service,
          or access accounts or squads you were not invited to.</li>
      </ul>
      <p>
        We may remove content and suspend or close accounts that break these
        rules, and we will act on reports from squad members.
      </p>

      <h2>5. Subscriptions, trials and referrals</h2>
      <p>
        Parts of the Service require a subscription, billed through the Apple
        App Store on a monthly or yearly cycle. Subscriptions renew automatically
        at the end of each cycle unless you cancel at least 24 hours before it
        ends, in your App Store account settings. Where a free trial is offered,
        it converts to a paid subscription unless cancelled before it ends.
        Prices may change; we will tell you in advance and you can cancel before
        a change applies. Refunds are handled by Apple under its terms.
      </p>
      <p>
        Referral codes grant free days of access to both people when redeemed,
        on the terms shown in the app. We may change or end the referral
        programme at any time, honouring free days already granted.
      </p>

      <h2>6. The widget and notifications</h2>
      <p>
        The home-screen widget shows your squad&apos;s recent proofs and updates
        in the background using a token tied to your account. Notifications and
        reminders are optional and controlled in the app and in your device
        settings. The widget and notifications depend on your device and
        network, so updates may be delayed.
      </p>

      <h2>7. Termination</h2>
      <p>
        You can stop using the Service and delete your account at any time from
        the app&apos;s settings or by emailing us. We may suspend or end your
        access if you breach these terms, if required by law, or if we
        discontinue the Service, giving reasonable notice where we can.
        Sections that by their nature should survive (content licence for
        backups, limits of liability, disputes) do.
      </p>

      <h2>8. Disclaimer and limit of liability</h2>
      <p>
        The Service is provided &quot;as is&quot;. We do not promise it will be
        uninterrupted or error-free, or that it will make you or your squad show
        up. To the fullest extent the law allows, we are not liable for indirect
        or consequential loss, and our total liability to you for any claim is
        limited to what you paid us in the twelve months before the claim.
        Nothing here limits liability that cannot be limited by law.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these terms. We will post the new version here with its
        date and, for material changes, tell you in the app. Continuing to use
        the Service after a change means you accept it.
      </p>

      <h2>10. Contact</h2>
      <p>
        Joywise Labs Limited — <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>
      </p>
    </LegalPage>
  );
}
