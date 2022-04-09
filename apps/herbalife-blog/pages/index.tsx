import Link from 'next/link';

export function Index() {
  return (
    <div className="yello">
      index

      <Link href="/detail">Detail</Link>

    </div>
  );
}

export default Index;
