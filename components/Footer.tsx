import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Client names are withheld under confidentiality; diagrams are generic redraws.</span>
      </div>
    </footer>
  );
}
