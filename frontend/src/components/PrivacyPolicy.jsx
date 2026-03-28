import React from 'react';

export default function PrivacyPolicy() {
  const lastUpdated = "March 2026";

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            This Privacy Policy describes how <strong>"OLIMP AIR" LLC</strong> ("we", "us", "our") collects, uses, and shares your information when you use the Aviatop platform.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Affiliate Disclosure & Flight Searches</h2>
          <p>
            Aviatop acts as a metasearch engine powered by our affiliate partner, <strong>Skyscanner</strong>. We provide search aggregated data to help you find the best travel options. We <strong>do not sell tickets directly</strong>, nor do we process your payments.
          </p>
          <p>
            When you click a booking link on our platform, you will be redirected to the airline or travel agency's official website. That third party is solely responsible for processing your booking, collecting your payment information, and handling your personal data according to their own Privacy Policy. We never see, store, or process credit card numbers or banking details.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Data We Collect</h2>
          <p>
            <strong>Account Information:</strong> If you choose to register an account with us to save your preferences, we collect your email address and an encrypted hash of your password.
          </p>
          <p>
            <strong>Usage Data:</strong> We may collect anonymous analytics data regarding how you use our search tools (like origin/destination cities searched) to improve our algorithms and user experience.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Data Sharing</h2>
          <p>
            We do not sell or rent your personal information. When you execute a flight search, the search parameters (dates, routes) are passed to our partner Skyscanner to retrieve flight availability. 
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Cookies and Tracking</h2>
          <p>
             Our website utilizes essential cookies to maintain your login session. We may also use local storage to temporarily hold your search queries so your experience remains seamless while browsing across sessions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Contact Us</h2>
          <p>
             If you have questions regarding this Privacy Policy or how your data is handled, please contact our data protection officer at:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-medium">
             <li>Email: support@olimpair.com</li>
             <li>Mail: "OLIMP AIR" LLC, Do‘stlik MFY, Shukrona ko'chasi, 17-uy, 10-xonadon, Termiz, Uzbekistan</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
