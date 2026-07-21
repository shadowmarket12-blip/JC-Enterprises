import Link from "next/link";

export const metadata = {
  title: "Return & Exchange Policy | JC Enterprises",
  description:
    "Read the return, replacement, and refund policy of JC Enterprises for damaged, defective, incorrect, or eligible electrical products purchased online.",
};

export default function ReturnExchangePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
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
            <span className="text-gray-900 font-medium">
              Return & Exchange Policy
            </span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Return & Exchange Policy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            At JC Enterprises, customer satisfaction is our priority. We strive
            to deliver genuine electrical and industrial products in excellent
            condition. If you receive a damaged, defective, incorrect, or
            incomplete product, we are here to help.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="space-y-12">
          {/* Section 1: Eligibility for Returns */}
          <section id="eligibility" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Eligibility for Returns
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>You may request a return or replacement if:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The product is damaged during delivery.</li>
                <li>You receive the wrong product.</li>
                <li>The product has a manufacturing defect.</li>
                <li>The product is incomplete or missing accessories.</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700 font-medium">
                      Return requests must be raised within 7 days of receiving
                      your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Products Not Eligible */}
          <section id="not-eligible" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Products Not Eligible for Return
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                For safety and quality reasons, the following items cannot be
                returned unless they are damaged or defective:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Products that have been installed or used.</li>
                <li>Products with damaged or missing original packaging.</li>
                <li>
                  Electrical items damaged due to improper installation or
                  misuse.
                </li>
                <li>Custom or special-order products.</li>
                <li>Clearance or sale items (unless defective).</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Return Process */}
          <section id="return-process" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Return Process
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>Follow these steps to initiate a return:</p>
              <div className="space-y-3 mt-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Contact Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Contact our customer support team with your order details.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Share Evidence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Share photographs or videos showing the issue clearly.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Review & Approval
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Our team will review the request within 2 business days.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Resolution
                    </h3>
                    <p className="text-gray-600 text-sm">
                      If approved, we will arrange a replacement or provide
                      return instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Refund Policy */}
          <section id="refund-policy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Refund Policy
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                Once the returned product is inspected and approved, eligible
                refunds will be processed to the original payment method within
                5–7 business days.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-green-800">
                    Refunds are processed to your original payment method.
                    Processing time may vary depending on your bank or payment
                    provider.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Exchange Policy */}
          <section id="exchange-policy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Exchange Policy
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                If you would like to exchange a product due to receiving an
                incorrect or damaged item, we will ship the replacement after
                verification and approval.
              </p>
            </div>
          </section>

          {/* Section 6: Damaged Shipments */}
          <section id="damaged-shipments" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Damaged Shipments
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                If your package appears damaged during delivery, please inform
                the delivery partner immediately and contact JC Enterprises as
                soon as possible.
              </p>
            </div>
          </section>

          {/* Section 7: Contact for Returns */}
          <section id="contact" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Contact for Returns
            </h2>
            <div className="text-gray-600 leading-relaxed text-[15px] sm:text-base space-y-3">
              <p>
                For return or exchange assistance, please contact our customer
                support team during business hours.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-4">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0"
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
                      <p className="font-semibold text-gray-900">Email</p>
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
                      className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0"
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
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-black text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0"
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
                      <p className="font-semibold text-gray-900">
                        Business Hours
                      </p>
                      <p className="text-black text-sm">
                        Monday - Saturday: 10:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-500 text-sm">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0"
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
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-black text-sm">
                        JC Enterprises, 123 Industrial Area,
                        <br />
                        Mumbai - 400001, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
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
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-500 text-center">
            JC Enterprises reserves the right to modify this policy at any time.
            Please review this page periodically for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
