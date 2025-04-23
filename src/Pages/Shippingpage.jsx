import React from 'react';

function Shippingpage() {
  return (
    <div className="shipping-page p-4 max-w-3xl mx-auto mt-[80px]">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-4">Shipping Policy</h1>
      </header>

      <section className="text-gray-700 space-y-4">
        <p>
          We promise our patrons one of the best experiences of online shopping that is hassle-free and reliable. We take care of all parameters that ensure your delivery reaches you in a sound state.
        </p>

        <p>
          Once the order is shipped from the warehouse, it cannot be canceled. If the shipment is delivered and the customer receives a faulty product, they can raise a return request.
        </p>

        <p>
          The tentative delivery period varies from 4–5 days. However, the actual delivery time may vary due to unexpected circumstances.
        </p>

        <p>
          We provide free shipping on all prepaid orders. If you choose the COD (Cash on Delivery) payment method, we levy a ₹50 COD charge for every product you order. For example, if your order includes three products, a COD charge of ₹150 will be applied.
        </p>
      </section>
    </div>
  );
}

export default Shippingpage;
