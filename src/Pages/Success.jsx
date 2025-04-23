import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    // Cleanup in case the component unmounts early
    return () => clearTimeout(timer);
  }, [navigate]);



  return (
    <>
     
      <div className="mt-[300px] text-2xl font-bold text-center px-4">
        🎉 Thank you for your purchase! Your order has been placed successfully.
        
      </div>
    </>
  );
}

export default Success;
