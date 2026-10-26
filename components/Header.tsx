import Link from 'next/link';
import { profile } from '@/data/profile';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#case-studies', label: 'Case studies' },
  { href: '/#architecture', label: 'Architecture' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#certifications', label: 'Certifications' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">SD</span>
          <span>{profile.name}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm header-cta" href={profile.resumePath} download>
          Resume
        </a>
      </div>
    </header>
  );
}
