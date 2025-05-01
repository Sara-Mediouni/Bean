import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { Link,useSearchParams } from "react-router-dom";
import { TiCancel } from "react-icons/ti";
const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();

 
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  if (success === 'true') {
    localStorage.removeItem('cart'); // ou localStorage.clear();
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f4] px-6 text-center">
    {success==='true'?
      <><FiCheckCircle className="text-[#e76f51] text-7xl mb-6 drop-shadow-md" />
      <h1 className="text-4xl font-bold text-[#4b2e2e] mb-4">Order Confirmed!</h1>
      <p className="text-[#5c4a3f] text-lg max-w-xl mb-10">
        Thank you for choosing <span className="font-semibold">Bean</span>. Your coffee is being brewed with love and will be ready shortly.
      </p>
      <Link
        to="/menu"
        className="px-6 py-3 bg-[#e76f51] hover:bg-[#d85739] text-white font-medium rounded-full transition-all shadow-lg"
      >
        Back to Menu
      </Link></> :
      <>
      <TiCancel className="text-[#e76f51] text-7xl mb-6 drop-shadow-md" />
      <h1 className="text-4xl font-bold text-[#4b2e2e] mb-4">Paiement failed</h1>
      </>}
    </div>
  );
};

export default OrderConfirmation;
