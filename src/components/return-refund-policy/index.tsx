import React from "react";

const ReturnAndRefundPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Return and Refund Policy
      </h1>
      <p className="text-right text-sm mb-4">Last updated: July 26, 2024</p>

      {/* Introductory Paragraph */}
      <p className="text-lg mb-4">
        Thank you for shopping with us! We appreciate your business and are
        committed to providing you with the best shopping experience possible.
        This Return and Refund Policy outlines the terms and conditions under
        which we accept returns and issue refunds.
      </p>

      {/* Subheading: Eligibility for Returns */}
      <h2 className="text-xl font-semibold mb-4">Eligibility for Returns</h2>
      <p className="text-lg mb-4">
        To be eligible for a return, your item must meet the following criteria:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Item must be unused and in the same condition that you received it.
        </li>
        <li>Item must be in the original packaging.</li>
        <li>Item must be returned within 30 days of purchase.</li>
      </ul>

      {/* Subheading: Non-Returnable Items */}
      <h3 className="text-lg font-semibold mb-2">Non-Returnable Items</h3>
      <p className="text-lg mb-4">
        Certain items cannot be returned, including:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Some health and personal care items</li>
      </ul>

      {/* Subheading: How to Initiate a Return */}
      <h2 className="text-xl font-semibold mb-4">How to Initiate a Return</h2>
      <p className="text-lg mb-4">
        To initiate a return, please follow these steps:
      </p>
      <ol className="list-decimal pl-6 mb-4">
        <li>
          Contact our customer service at <strong>support@example.com</strong>{" "}
          to request a return authorization.
        </li>
        <li>
          Pack the item securely, including all original packaging and
          accessories.
        </li>
        <li>
          Ship the item to the address provided by our customer service team.
        </li>
      </ol>

      {/* Subheading: Refunds */}
      <h2 className="text-xl font-semibold mb-4">Refunds</h2>
      <p className="text-lg mb-4">
        Once we receive your returned item, we will inspect it and notify you of
        the approval or rejection of your refund. If approved, your refund will
        be processed, and a credit will be applied to your original method of
        payment within a certain amount of days.
      </p>

      {/* Subheading: Late or Missing Refunds */}
      <h3 className="text-lg font-semibold mb-2">Late or Missing Refunds</h3>
      <p className="text-lg mb-4">
        If you haven’t received a refund yet, first check your bank account
        again. Then contact your credit card company; it may take some time
        before your refund is officially posted. If you’ve done all of this and
        you still have not received your refund, please contact us at{" "}
        <strong>support@example.com</strong>.
      </p>

      {/* Subheading: Exchanges */}
      <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
      <p className="text-lg mb-4">
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, send us an email at{" "}
        <strong>support@example.com</strong> and we will guide you through the
        process.
      </p>

      {/* Subheading: Contact Us */}
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about this Return and Refund Policy, please
        contact us at:
      </p>
      <p className="text-lg mb-4">
        Email: <strong>support@example.com</strong>
      </p>
      <p className="text-lg mb-4">
        Phone: <strong>(123) 456-7890</strong>
      </p>
    </div>
  );
};

export default ReturnAndRefundPolicy;
