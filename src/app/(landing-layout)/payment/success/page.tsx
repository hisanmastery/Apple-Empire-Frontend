
import PaymentSuccess from '@/components/payment/payment-success';
import React, { Suspense } from 'react';
const PaymentSuccessPage = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <div>
                <PaymentSuccess />
            </div>
        </Suspense>
    );
};

export default PaymentSuccessPage;