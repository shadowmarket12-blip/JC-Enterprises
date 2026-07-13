"use client";

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white dark:text-white text-sm">
          © {currentYear} Your Company Name. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="/privacy-policy"
            className="text-white dark:text-white hover:text-white dark:hover:text-white text-sm transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-white dark:text-white hover:text-white dark:hover:text-white text-sm transition-colors duration-200"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}
