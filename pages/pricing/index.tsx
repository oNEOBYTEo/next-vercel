import React from 'react';
import { ReactElement } from 'react';

import Link from 'next/link';

import { MainLayout } from '../../components/layout/MainLayout';

export default function PricingPage() {
  return (
    <>
      <h1 className="title">
        Go to<Link href="/"> Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/pricing.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
