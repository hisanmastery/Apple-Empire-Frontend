import React from "react";

const WarrantyPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-center mb-6">
        Terms & Conditions of Warranty Claim for Smart Devices
      </h1>

      {/* Paragraph Section */}
      <p className="text-lg mb-4">
        Apple iPhone & iPad, MacBook, iMac, Apple Watch, AirPods, iPad Pro &
        mini, Apple Pencil, Apple TV, Apple Gadgets for Smart Devices are
        eligible for warranty service. Only Apple Premium Reseller / Apple
        Authorized Service Provider is allowed to claim warranty service for any
        Apple products. For any Apple Gadget warranty claim, please contact{" "}
        <strong>XYZ Gadgets</strong> service center directly.
      </p>
      <p className="text-lg mb-4">
        Warranty can only be claimed through <strong>XYZ</strong> Service
        Center.
      </p>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-4">Terms & Conditions:</h2>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 mb-4">
        <li>Warranty covers any hardware or software defects.</li>
        <li>Warranty doesn’t cover any accidental damage or liquid damage.</li>
        <li>Warranty voids if the device is physically damaged.</li>
        <li>
          Warranty voids if the device has been repaired by unauthorized
          personnel.
        </li>
        <li>
          Any kind of software issues can be handled by the XYZ Service Center.
        </li>
        <li>No warranty on accessories.</li>
      </ul>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-4">
        Terms & Conditions for Accessories Warranty Claim
      </h2>

      {/* Paragraph Section */}
      <p className="text-lg mb-4">
        Official warranty for XYZ Accessories includes: Smart Watches, Bluetooth
        Devices, Earphones, Headphones, Powerbanks, and other accessories. The
        warranty can only be claimed at <strong>XYZ Service Center</strong>. The
        warranty is valid for a specified period of time depending on the
        product category.
      </p>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-4">Terms and Conditions:</h2>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 mb-4">
        <li>Warranty covers any manufacturing defects.</li>
        <li>Physical or accidental damage is not covered under warranty.</li>
        <li>Damage caused due to improper usage is not covered.</li>
        <li>
          Warranty voids if accessories are repaired by unauthorized personnel.
        </li>
      </ul>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-4">
        How to Claim Warranty for Accessories?
      </h2>

      {/* Paragraph Section */}
      <p className="text-lg mb-4">
        To claim warranty, please visit the <strong>XYZ</strong> service center
        with proof of purchase and the defective product. If the claim is
        accepted, the product will either be repaired or replaced.
      </p>

      {/* Subheading */}
      <h2 className="text-xl font-semibold mb-4">Important Notes:</h2>

      {/* Bullet Points */}
      <ul className="list-disc pl-6 mb-4">
        <li>
          Replacement or repair decisions are at the discretion of the service
          provider.
        </li>
        <li>Proof of purchase is required for all warranty claims.</li>
      </ul>

      {/* Final Paragraph */}
      <p className="text-lg mb-4">
        For further details, please contact XYZ Gadgets at their service center.
      </p>
    </div>
  );
};

export default WarrantyPolicy;
