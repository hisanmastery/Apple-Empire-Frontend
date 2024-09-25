import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Terms and Conditions
      </h1>
      <p className="text-right text-sm mb-4">Last updated: July 26, 2024</p>

      {/* Introductory Paragraph */}
      <p className="text-lg mb-4">
        Welcome to [Your Company Name]! These Terms and Conditions outline the
        rules and regulations for using our website and services. By accessing
        or using our service, you agree to comply with and be bound by these
        terms.
      </p>

      {/* Subheading: Acceptance of Terms */}
      <h2 className="text-xl font-semibold mb-4">Acceptance of Terms</h2>
      <p className="text-lg mb-4">
        By accessing the website or using our services, you acknowledge that you
        have read, understood, and agree to be bound by these Terms and
        Conditions. If you do not agree with any part of these terms, you must
        not use our service.
      </p>

      {/* Subheading: Changes to Terms */}
      <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
      <p className="text-lg mb-4">
        We reserve the right to modify these Terms and Conditions at any time.
        Any changes will be effective immediately upon posting on this page.
        Your continued use of the service after any changes constitutes your
        acceptance of the new terms.
      </p>

      {/* Subheading: User Responsibilities */}
      <h2 className="text-xl font-semibold mb-4">User Responsibilities</h2>
      <p className="text-lg mb-4">By using our service, you agree to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Provide accurate, current, and complete information as prompted by the
          registration form.
        </li>
        <li>Maintain the security of your password and identification.</li>
        <li>
          Notify us immediately of any unauthorized use of your account or any
          other breach of security.
        </li>
        <li>
          Take responsibility for all activities that occur under your account.
        </li>
      </ul>

      {/* Subheading: Intellectual Property */}
      <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
      <p className="text-lg mb-4">
        All content, trademarks, and other intellectual property on our website
        are the property of [Your Company Name] or its licensors. You may not
        use, reproduce, or distribute any materials from our website without our
        express written permission.
      </p>

      {/* Subheading: Limitation of Liability */}
      <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
      <p className="text-lg mb-4">
        In no event shall [Your Company Name] be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from or
        related to your use of the service.
      </p>

      {/* Subheading: Governing Law */}
      <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
      <p className="text-lg mb-4">
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of [Your Country/State], without regard to its
        conflict of law provisions.
      </p>

      {/* Subheading: Contact Us */}
      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about these Terms and Conditions, please
        contact us at:
      </p>
      <p className="text-lg mb-4">
        Email: <strong>support@example.com</strong>
      </p>
      <p className="text-lg mb-4">
        Phone: <strong>(123) 456-7890</strong>
      </p>

      {/* Subheading: Miscellaneous */}
      <h2 className="text-xl font-semibold mb-4">Miscellaneous</h2>
      <p className="text-lg mb-4">
        If any provision of these Terms and Conditions is found to be
        unenforceable or invalid, that provision will be limited or eliminated
        to the minimum extent necessary, and the remaining provisions will
        remain in full force and effect.
      </p>
    </div>
  );
};

export default TermsAndConditions;
