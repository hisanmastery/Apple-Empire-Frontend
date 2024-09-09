import CompareComponent from '@/components/compare';
import React from 'react';

const ComparePage = ({params}:any) => {
    const canonicalUrl = params?.compare 
    return <CompareComponent id={canonicalUrl} />
};

export default ComparePage;