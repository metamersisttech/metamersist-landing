import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "FarmerApp Privacy Policy | MetaMersist",
  description:
    "Privacy Policy for FarmerApp - Learn how we collect, use, and protect your data.",
};

export default function FarmerAppPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sky hover:text-sky-light transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
          FarmerApp Privacy Policy
        </h1>
        <p className="text-text-muted mb-8">
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Introduction
            </h2>
            <p className="text-text-muted leading-relaxed">
              MetaMersist Technologies Pvt. Ltd. (&quot;MetaMersist,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the FarmerApp mobile application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
            </p>
            <p className="text-text-muted leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By using the App, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Information We Collect
            </h2>

            <h3 className="text-lg font-medium text-foreground mb-2">
              2.1 Personal Information
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              When you register and use FarmerApp, we may collect the following personal information:
            </p>
            <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
              <li>Name and contact details (phone number, email address)</li>
              <li>Location data (village, district, state)</li>
              <li>Farm and livestock information</li>
              <li>Transaction history within the app</li>
              <li>Profile photographs (if uploaded)</li>
            </ul>

            <h3 className="text-lg font-medium text-foreground mb-2 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-text-muted leading-relaxed mb-4">
              When you access the App, we may automatically collect:
            </p>
            <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Log information (access times, pages viewed, app crashes)</li>
              <li>Location information (with your consent, for nearby listings and weather services)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
              <li>To provide and maintain the App&apos;s functionality</li>
              <li>To facilitate livestock buying, selling, and trading</li>
              <li>To connect farmers with potential buyers and sellers</li>
              <li>To provide weather forecasts and agricultural insights</li>
              <li>To send notifications about transactions and app updates</li>
              <li>To improve our services and user experience</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
              <li><strong>With other users:</strong> Your listing information (excluding personal contact details until you choose to share) is visible to other App users</li>
              <li><strong>Service providers:</strong> Third-party vendors who assist us in operating the App (hosting, analytics, customer support)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with any merger, sale, or acquisition</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Data Security
            </h2>
            <p className="text-text-muted leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Data Retention
            </h2>
            <p className="text-text-muted leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you services. We may retain certain information as required by law or for legitimate business purposes. You may request deletion of your account and associated data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              7. Your Rights
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-text-muted space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent for data processing where applicable</li>
              <li><strong>Data portability:</strong> Request transfer of your data to another service</li>
            </ul>
            <p className="text-text-muted leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-text-muted leading-relaxed">
              FarmerApp is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              9. Third-Party Services
            </h2>
            <p className="text-text-muted leading-relaxed">
              The App may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-text-muted leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              11. Contact Us
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-foreground font-medium mb-2">
                MetaMersist Technologies Pvt. Ltd.
              </p>
              <p className="text-text-muted">
                Email: <a href="mailto:support@metamersist.com" className="text-sky hover:underline">support@metamersist.com</a>
              </p>
              <p className="text-text-muted">
                Phone: <a href="tel:+918087080072" className="text-sky hover:underline">+91 8087080072</a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky hover:text-sky-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
