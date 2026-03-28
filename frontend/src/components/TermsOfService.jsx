import React from 'react';

export default function TermsOfService() {
  const lastUpdated = "March 2026";

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Terms of Service</h1>
          <p className="text-slate-500 font-medium">Last Updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <p>
            Welcome to Aviatop. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. These terms constitute a legally binding agreement between you and <strong>"OLIMP AIR" LLC</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Service Description</h2>
          <p>
            Aviatop provides a free flight search engine and comparison service. Our powerful aggregation platform is powered by the Skyscanner API. We aggregate and display flight options, prices, and travel-related data retrieved from third-party travel agencies and airlines.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Third-Party Bookings</h2>
          <p>
            <strong>"OLIMP AIR" LLC does not act as a travel agent.</strong> We do not sell tickets, process payments, or manage bookings. When you select a flight, you are interacting with third-party providers. Any booking disputes, cancellations, refunds, or customer service issues must be resolved directly with the provider you purchased your ticket from.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Accuracy of Information</h2>
          <p>
            While we strive for accuracy, flight prices and availability are highly dynamic and fluctuate rapidly. The prices shown on Aviatop are cached and provided by our partners. We cannot guarantee that the price shown on our site will be identical to the final price on the booking provider's website.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Acceptable Use</h2>
          <p>
             You agree to use the Aviatop platform only for legitimate, personal, non-commercial travel planning. You are strictly prohibited from using automated bots, scrapers, or other tools to extract bulk data from our search engine, as this violates our agreement with Skyscanner.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Limitation of Liability</h2>
          <p>
             To the fullest extent permitted by law, "OLIMP AIR" LLC shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of the website, missed flights, booking errors made by third parties, or inaccuracies in the search data provided by our affiliate networks.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Jurisdiction</h2>
          <p>
             These Terms of Service are governed by the laws of the Republic of Uzbekistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Uzbekistan.
          </p>
        </div>

      </div>
    </div>
  );
}
