import Link from 'next/link';
import { MainLayout } from '../components/layout/MainLayout';
export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="title">
        Go to<Link href="/about">About pages</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </MainLayout>
  );
}
