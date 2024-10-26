
"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Do you offer warranty for the phones you sell?',
    answer: 'Yes, we offer a warranty on all our phones and devices. The duration of the warranty may vary depending on the manufacturer and model. Please check the product details or ask our staff for specific warranty information.',
  },
  {
    question: 'What payment method do you accept?',
    answer: 'We accept various payment methods including cash, credit cards, debit cards and mobile payment apps like bKash, Nagad, Rocket, City Touch, Unet, Upay etc.',
  },
  {
    question: 'Can I trade in my old phone?',
    answer: 'Yes, we have a phone trade-in program where you can bring your old phone and receive credit toward the purchase of a new device. The trade-in value depends on the condition, model, and current market value and demand of your old phone. Our staff will assess your device and provide an estimate.',
  },
  {
    question: 'Do you offer phone accessories?',
    answer: 'Absolutely! We have a wide range of phone accessories available including cases, screen protectors, cables & adapters, headphones, smart watches, speakers, power banks, and many more. You can find accessories for various phone models and brands in our store.',
  },
  {
    question: 'Can I buy a phone online and have it shipped to my location?',
    answer: 'Yes, we offer online shipping options. You can browse our website or Facebook page, select the desired product, and proceed with the purchase. During the checkout process, you can choose your preferred shipping method and provide the necessary delivery details.',
  },
  {
    question: 'Can I pre-order upcoming phone models or gadgets?',
    answer: 'Yes, we offer pre-order options for upcoming phone models and gadgets. By pre-ordering, you can secure your device before it becomes available to the general public. Our staff will provide you with the necessary information and assist you in the pre-order process.',
  },
  {
    question: 'Do you provide repair services?',
    answer: 'Yes, we offer phone repair services for a variety of issues such as screen replacement, battery replacement, software troubleshooting, and more. Our skilled technicians will assess the problem and provide you with an estimate for the repair.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'It may take 7 to 10 working days to refund online payments after product return.',
  },
  {
    question: 'What are your delivery options and how much does shipping cost?',
    answer: 'We offer several delivery options, including Standard shipping, Express shipping, Sundarban courier service, and in-store pick-up depending on your location and preferences. Shipping charges are determined by factors such as the shipping method, destination, and product. The exact shipping cost will be calculated during the checkout process. Inside Dhaka, the delivery will be completed within 1 to a maximum of 5 working days. Outside Dhaka City, delivery will be completed within a maximum of 10 days.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions (FAQ)</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border-b last:border-b-0">
            <button
              className="flex justify-between w-full py-2 text-left text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="text-gray-600">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
