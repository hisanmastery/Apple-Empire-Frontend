
import SkeletonLoader from '@/components/loading';
import PaymentFailed from '@/components/payment/payment-failed';
import React, { Suspense } from 'react';

const PaymentFailedPage = () => {
    return (
        <Suspense fallback={<SkeletonLoader/>}>
            <div>
                <PaymentFailed />
            </div>
        </Suspense>
    );
};

export default PaymentFailedPage;