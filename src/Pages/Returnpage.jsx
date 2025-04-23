import React from 'react';

function Returnpage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 mt-8">
      <h1 className="text-4xl font-extrabold text-center mb-12">Return, Refund & Cancellation Policies</h1>

      {/* Policy Titles */}
      <div className="mb-10 text-center space-y-2 text-lg font-medium text-gray-700">
        <p>Return & Exchange Policy</p>
        <p>Refund Policy</p>
        <p>Cancellation Policy</p>
        <p>Things To Consider</p>
      </div>

      {/* Return & Exchange Policy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Return & Exchange Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Returns or exchanges can be made within 15 days of delivery.</li>
          <li>If you receive a defective or wrong product, we will handle reverse pickup and cover shipping costs.</li>
          <li><strong>Note:</strong> Capture a video/photo before shipping or handing the package to the courier partner.</li>
          <li>If reverse pickup is unavailable at your pin code, you can self-ship and claim up to ₹100 in shipping charges if the issue is verified.</li>
          <li>
            Please ship to: <br />
            <strong>Beyoung Folks Pvt. Ltd., Eklingpura Chouraha, Ahmedabad Main Road (NH 8 - Near Mahadev Hotel), Udaipur, India 313002</strong>
          </li>
          <li>Ensure products are unused, packed properly, and include all original tags and packaging.</li>
          <li>For hygiene reasons, Boxer Shorts are not eligible for return/refund/exchange.</li>
          <li><strong>Note:</strong> Use Speed Post (India Post) for reliable and trackable shipping.</li>
        </ul>
      </div>

      {/* Refund Policy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Prepaid Orders:</strong> Refunds will be processed within 7 working days post-warehouse Quality Check.
            The amount will be refunded to the original payment mode.
          </li>
          <li>
            <strong>Note:</strong> If you used a refund coupon for payment, the refund will be split between a new coupon and original payment mode.
          </li>
          <li>
            <strong>COD Orders:</strong> A coupon worth the order value will be emailed/WhatsApped within 48 hours after Quality Check.
          </li>
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Orders can be canceled within 24 hours via the Beyoung Chatbot under <strong>My Account &gt;&gt; Need Help &gt;&gt; Help Centre</strong>.
          </li>
          <li>If already shipped, the order cannot be canceled. You may request a return after delivery if there’s an issue.</li>
        </ul>
      </div>

      {/* Things To Consider */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Things To Consider</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Please check the size guide before ordering.</li>
          <li>Product color may slightly vary depending on your screen resolution.</li>
          <li>Provide your WhatsApp number for updates and better experience.</li>
          <li>Boxer Shorts are not eligible for return/refund/exchange due to hygiene concerns.</li>
          <li>For torn/unrelated/empty parcels, raise a query within 48 hours. We suggest recording an unboxing video for safety.</li>
        </ul>
      </div>
    </div>
  );
}

export default Returnpage;
