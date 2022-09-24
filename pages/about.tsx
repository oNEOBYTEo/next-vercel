import Link from 'next/link';
import { ReactElement } from 'react';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayout } from '../components/layout/MainLayout';

export default function AboutPage() {
  return (
    <>
      <h1 className="title">
        Go to<Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/About.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
