import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Willkommen bei NMSGPT</h1>
      <p><Link href="/chat">Zum Chat starten</Link></p>
    </div>
  );
}
