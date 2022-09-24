import Link from 'next/link';
import { MainLayout } from '../../components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <h1 className="title">
        Go to<Link href="/about">About pages</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
