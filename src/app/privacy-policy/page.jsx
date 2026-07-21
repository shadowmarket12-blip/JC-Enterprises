import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | JC Enterprises",
  description:
    "Learn how JC Enterprises collects, uses, stores, and protects your personal information when you shop on our website.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-black mb-6">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-black font-medium">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black max-w-3xl leading-relaxed">
            JC Enterprises respects your privacy and is committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, store, and safeguard the information you provide while
            using our website.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="space-y-12">
          {/* Section 1: Information We Collect */}
          <section id="information-collection" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Information We Collect
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>We may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Billing Address</li>
                <li>Shipping Address</li>
                <li>Payment Information</li>
                <li>Order History</li>
                <li>Device Information</li>
                <li>IP Address</li>
                <li>Browser Information</li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section id="usage" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              How We Use Your Information
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and deliver orders.</li>
                <li>Respond to enquiries.</li>
                <li>Improve our website and customer experience.</li>
                <li>Send order updates and notifications.</li>
                <li>Provide customer support.</li>
                <li>Prevent fraud and ensure website security.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Cookies */}
          <section id="cookies" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Cookies
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Our website may use cookies to enhance user experience, remember
                preferences, analyse website traffic, and improve performance.
                You may disable cookies through your browser settings if
                preferred.
              </p>
            </div>
          </section>

          {/* Section 4: Data Security */}
          <section id="security" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Data Security
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                We implement appropriate technical and organisational measures
                to protect your personal information from unauthorised access,
                misuse, or disclosure.
              </p>
            </div>
          </section>

          {/* Section 5: Sharing Information */}
          <section id="sharing" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Sharing Information
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                We do not sell or rent your personal information. Information
                may only be shared with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment gateway providers.</li>
                <li>Shipping and logistics partners.</li>
                <li>Government authorities when legally required.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Third-Party Links */}
          <section id="third-party" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Third-Party Links
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Our website may contain links to third-party websites. JC
                Enterprises is not responsible for the privacy practices or
                content of external websites.
              </p>
            </div>
          </section>

          {/* Section 7: Your Rights */}
          <section id="your-rights" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Your Rights
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>You may request to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information.</li>
                <li>Correct inaccurate details.</li>
                <li>Update your account information.</li>
                <li>
                  Request deletion of eligible personal data, subject to
                  applicable legal and business obligations.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: Policy Updates */}
          <section id="updates" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Policy Updates
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                We may update this Privacy Policy from time to time. The latest
                version will always be available on this page.
              </p>
            </div>
          </section>

          {/* Section 9: Contact Us */}
          <section id="contact" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Contact Us
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                If you have any questions regarding this Privacy Policy or your
                personal information, please contact JC Enterprises through our
                official contact details.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-4">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-black text-sm">Email</p>
                      <Link
                        href="mailto:support@jcenterprises.com"
                        className="text-black hover:underline text-sm"
                      >
                        support@jcenterprises.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-black text-sm">Phone</p>
                      <p className="text-black text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-black text-sm">
                        Business Hours
                      </p>
                      <p className="text-black text-sm">
                        Monday - Saturday: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-black mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-black text-sm">
                        Address
                      </p>
                      <p className="text-black text-sm">
                        JC Enterprises, 123 Industrial Area,
                        <br />
                        Bhubaneswar - 751001, Odisha
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Related Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-black hover:text-gray-700 transition-colors font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/terms"
                className="text-sm text-black hover:text-gray-700 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/return-exchange"
                className="text-sm text-black hover:text-gray-700 transition-colors"
              >
                Return & Exchange
              </Link>
              <Link
                href="/contact"
                className="text-sm text-black hover:text-gray-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-black text-center">
            Last updated: July 2026 · JC Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
