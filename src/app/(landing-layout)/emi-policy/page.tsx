import Link from "next/link";
import React from "react";

const EMIPolicy: React.FC = () => {
  return (
    <div className="container mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">EMI Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Our EMI (Equated Monthly Installment) policy allows customers to
          purchase products and pay for them in installments over time. This
          policy outlines the eligibility, terms, and conditions associated with
          EMI purchases.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Must be 18 years or older.</li>
          <li>Valid credit or debit card with EMI facility.</li>
          <li>Purchase amount should meet the minimum EMI requirement.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-gray-700">
          The EMI option is available for a minimum purchase of $100. Interest
          rates may vary based on the bank's policy. Please ensure that you
          review the terms and conditions with your bank before proceeding.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cancellation & Refunds</h2>
        <p className="text-gray-700">
          If an order is canceled, the EMI will also be canceled, and any refund
          due will be processed in accordance with our standard refund policy.
          Please note that cancellation charges may apply.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold">What is EMI?</h3>
            <p className="text-gray-700">
              EMI stands for Equated Monthly Installment. It is a fixed payment
              amount made by a borrower to a lender at a specified date each
              calendar month.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold">How do I avail EMI?</h3>
            <p className="text-gray-700">
              You can avail EMI by selecting the EMI option at checkout. Make
              sure your credit or debit card supports EMI.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-semibold">
              Can I cancel an EMI order?
            </h3>
            <p className="text-gray-700">
              Yes, you can cancel an EMI order. The refund and cancellation will
              follow the regular process, but bank charges may apply.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-10">
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <Link href={"/contact-us"}> Contact Support</Link>
        </button>
      </div>
    </div>
  );
};

export default EMIPolicy;
