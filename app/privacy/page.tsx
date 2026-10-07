import type { Metadata } from "next";
import { LegalPage } from "@/components/Neu";

export const metadata: Metadata = {
  title: "Privacy Policy — Comeup",
  description: "How Comeup collects, uses and protects your information.",
};

const SUPPORT = "support@getcomeup.com";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="October 7, 2026">
      <h2>1. Introduction</h2>
      <p>
        Comeup is made by Joywise Labs Limited (&quot;we&quot;, &quot;our&quot;,
        &quot;us&quot;). This policy describes the information we collect when
        you use the Comeup mobile app and this website (together, the
        &quot;Services&quot;), how we use it, who can see it, and the choices you
        have. Comeup is built around small, invite-only squads: the photos you
        post are shared with the people in your squad, and only them.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account:</strong> when you sign in with Apple or Google we
          receive your email address and, if you share it, your name, to create
          and secure your account.
        </li>
        <li>
          <strong>Profile:</strong> the username, nickname, profile photo and
          quote you choose, plus optional onboarding answers (your goals, and if
          you give them, an age range and gender) that we use to tailor the app.
        </li>
        <li>
          <strong>Your proofs:</strong> the photos and videos you post, their
          category, caption and the time they were taken, and the reactions and
          comments you leave on your squad-mates&apos; proofs.
        </li>
        <li>
          <strong>Squads:</strong> the squads you create or join, their names
          and descriptions, invite codes, and who is in them.
        </li>
        <li>
          <strong>Device data:</strong> a push-notification token, your
          timezone, a widget token so your home-screen widget can fetch your
          squad&apos;s latest proof while the app is closed, and the usual
          diagnostics (device model, OS version, crash reports).
        </li>
        <li>
          <strong>Purchases:</strong> subscription status from Apple&apos;s App
          Store, handled by RevenueCat. We never see your card details.
        </li>
        <li>
          <strong>Usage:</strong> how you use the app (screens viewed, features
          used) so we can improve it.
        </li>
      </ul>

      <h2>3. How we use it</h2>
      <ul>
        <li>To run the Services: your account, your squads, your feed and your
          home-screen widget.</li>
        <li>To deliver your proofs to your squad and theirs to you, including
          through push notifications and the widget.</li>
        <li>To send the reminders and nudges you have turned on.</li>
        <li>To manage subscriptions, free trials and referral free days.</li>
        <li>To keep the Services safe: enforcing our terms, handling reports and
          blocks, preventing abuse.</li>
        <li>To understand and improve the app.</li>
      </ul>

      <h2>4. Who sees your content</h2>
      <p>
        Your proofs, reactions and comments are visible to the members of the
        squads you share them in. They are not public and there is no feed of
        strangers. People you block cannot see your proofs, and you will not see
        theirs. Your username and profile photo are visible to your squad-mates.
      </p>

      <h2>5. Services we rely on</h2>
      <p>We use a small number of providers to run Comeup. Each receives only
        what it needs for its job:</p>
      <ul>
        <li><strong>Supabase</strong> — account, database and server functions.</li>
        <li><strong>Cloudflare R2</strong> — storage for your photos and videos.</li>
        <li><strong>Firebase Cloud Messaging</strong> — push notifications.</li>
        <li><strong>RevenueCat and the Apple App Store</strong> — subscriptions
          and purchases.</li>
        <li><strong>Sign in with Apple / Google</strong> — authentication.</li>
        <li><strong>Analytics</strong> — anonymous usage events that help us
          improve the app.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>6. Device permissions and the widget</h2>
      <p>
        The app asks for the camera to take proofs, for notifications to deliver
        your squad&apos;s activity and your reminders, and for the home-screen
        widget to fetch your squad&apos;s latest proof in the background using a
        token tied to your account. We do not access other data on your device
        without asking.
      </p>

      <h2>7. Retention and deletion</h2>
      <p>
        We keep your information while your account exists. You can delete your
        account from the app&apos;s settings, or by emailing{" "}
        <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>; we then delete your
        profile, your proofs and your squad memberships, apart from what we must
        keep to meet legal obligations or resolve disputes. Deleting a proof
        removes it for your squad too.
      </p>

      <h2>8. Security</h2>
      <p>
        Your data is stored on secured servers, access to it is restricted, and
        your proofs are only ever served to your squad-mates. No system is
        perfectly secure, so please use a strong account with your Apple or
        Google ID and tell us at once if you believe your account has been
        misused.
      </p>

      <h2>9. Children</h2>
      <p>
        Comeup is not directed at children under 13 (or the minimum age in your
        country) and we do not knowingly collect their information. If you
        believe a child has given us personal information, contact us and we
        will delete it.
      </p>

      <h2>10. Your rights</h2>
      <p>
        Depending on where you live you may have the right to access, correct,
        export or delete your personal information, or to object to or restrict
        how we use it. Most of this you can do in the app; for anything else,
        email us. We answer within 30 days.
      </p>

      <h2>11. Changes</h2>
      <p>
        We will post any changes to this policy on this page and update the date
        above. Material changes will also be announced in the app.
      </p>

      <h2>12. Contact</h2>
      <p>
        Joywise Labs Limited — <a href={`mailto:${SUPPORT}`}>{SUPPORT}</a>
      </p>
    </LegalPage>
  );
}
