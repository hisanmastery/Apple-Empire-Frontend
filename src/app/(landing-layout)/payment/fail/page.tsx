
import PaymentFailed from '@/components/payment/payment-failed';
import React, { Suspense } from 'react';

const PaymentFailedPage = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <div>
                <PaymentFailed />
            </div>
        </Suspense>
    );
};

export default PaymentFailedPage;