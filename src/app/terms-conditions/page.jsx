import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | JC Enterprises",
  description:
    "Read the terms and conditions for using the JC Enterprises website, including ordering, pricing, payments, shipping, warranties, and user responsibilities.",
};

export default function TermsPage() {
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
            <span className="text-black font-medium">Terms & Conditions</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black max-w-3xl leading-relaxed">
            Welcome to JC Enterprises. By accessing or using our website, you
            agree to comply with these Terms & Conditions. Please read them
            carefully before placing an order.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="space-y-12">
          {/* Section 1: General */}
          <section id="general" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              1. General
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                JC Enterprises is an online platform offering electrical and
                industrial products for retail and wholesale customers. We
                reserve the right to update these terms at any time without
                prior notice. Continued use of the website after changes
                constitutes acceptance of the modified terms.
              </p>
            </div>
          </section>

          {/* Section 2: Product Information */}
          <section id="product-info" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              2. Product Information
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                We make every effort to display accurate product descriptions,
                specifications, pricing, and images. However, minor differences
                in colour, packaging, or appearance may occur due to
                manufacturer updates. Product images are for illustration
                purposes only.
              </p>
            </div>
          </section>

          {/* Section 3: Pricing */}
          <section id="pricing" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              3. Pricing
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                All prices displayed are subject to change without prior notice.
                Applicable taxes and shipping charges will be calculated during
                checkout unless otherwise specified. We strive to maintain
                accurate pricing but reserve the right to correct any errors.
              </p>
              <div className="bg-gray-50 border-l-4 border-black p-4 rounded-r-lg mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-black font-medium">
                      Final price including all taxes and shipping will be
                      displayed at checkout before payment confirmation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Orders */}
          <section id="orders" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              4. Orders
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                All orders are subject to product availability and confirmation.
                JC Enterprises reserves the right to cancel or refuse any order
                due to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Stock limitations or unavailability</li>
                <li>Pricing errors or inaccuracies</li>
                <li>Suspected fraudulent activity</li>
                <li>Unforeseen circumstances beyond our control</li>
              </ul>
              <p>
                In case of order cancellation, any payments made will be fully
                refunded to the original payment method.
              </p>
            </div>
          </section>

          {/* Section 5: Payment */}
          <section id="payment" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              5. Payment
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Payments can be made using the payment methods available during
                checkout. Orders will only be processed after successful payment
                confirmation unless Cash on Delivery is available in your area.
              </p>
              <p>
                All payment transactions are encrypted and processed through
                secure payment gateways. We do not store your complete payment
                card information on our servers.
              </p>
            </div>
          </section>

          {/* Section 6: Shipping */}
          <section id="shipping" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              6. Shipping
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Delivery timelines may vary depending on product availability,
                delivery location, weather conditions, and logistics. Estimated
                delivery dates are provided for convenience and are not
                guaranteed.
              </p>
              <p>
                JC Enterprises is not liable for delays caused by courier
                services, natural calamities, or other circumstances outside our
                control. Tracking information will be shared once the order is
                dispatched.
              </p>
            </div>
          </section>

          {/* Section 7: Warranty */}
          <section id="warranty" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              7. Warranty
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Products covered by manufacturer warranties will be serviced
                according to the respective brand&apos;s warranty policies. JC
                Enterprises is not responsible for warranty claims beyond the
                manufacturer&apos;s terms.
              </p>
              <p>
                Warranty periods and coverage vary by product and brand. Please
                refer to the product documentation or contact us for specific
                warranty information before making a purchase.
              </p>
            </div>
          </section>

          {/* Section 8: User Responsibilities */}
          <section id="user-responsibilities" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              8. User Responsibilities
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>Users agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide accurate and complete information during registration
                  and checkout.
                </li>
                <li>
                  Use the website lawfully and in compliance with applicable
                  regulations.
                </li>
                <li>
                  Not attempt unauthorised access to any part of the website or
                  its systems.
                </li>
                <li>
                  Not misuse website content, including copying or
                  redistributing without permission.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 9: Intellectual Property */}
          <section id="intellectual-property" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              9. Intellectual Property
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                All website content, including text, graphics, logos, images,
                and designs, belongs to JC Enterprises unless otherwise stated.
                Unauthorised use, reproduction, or distribution of any content
                without prior written permission is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Section 10: Limitation of Liability */}
          <section id="liability" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              10. Limitation of Liability
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                JC Enterprises shall not be liable for indirect, incidental, or
                consequential damages resulting from the use of products
                purchased through our website. Our liability is limited to the
                purchase price of the product in question.
              </p>
            </div>
          </section>

          {/* Section 11: Governing Law */}
          <section id="governing-law" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              11. Governing Law
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                These Terms & Conditions shall be governed by and interpreted in
                accordance with the laws of India. Any disputes arising from
                these terms shall be subject to the exclusive jurisdiction of
                the competent courts in Bhubaneswar, Odisha.
              </p>
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200 mt-4">
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
                      Jurisdiction
                    </p>
                    <p className="text-black text-sm mt-1">
                      Bhubaneswar, Odisha, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-4 pb-2 border-b border-gray-200">
              Questions About These Terms?
            </h2>
            <div className="text-black leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact us:
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
                href="/privacy"
                className="text-sm text-black hover:text-gray-700 transition-colors"
              >
                Privacy Policy
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
