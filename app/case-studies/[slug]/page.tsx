import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Diagram from '@/components/Diagram';
import { caseStudies, profile } from '@/data/profile';

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  return c ? { title: `${c.title} — ${profile.name}`, description: c.summary } : {};
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();

  const idx = caseStudies.indexOf(c);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="section case">
      <div className="container narrow">
        <Link href="/#case-studies" className="back">← All case studies</Link>
        <p className="eyebrow">{c.client}</p>
        <h1>{c.title}</h1>
        <p className="lead">{c.summary}</p>
        <ul className="chips">
          {c.stack.map((t) => <li key={t}>{t}</li>)}
        </ul>

        <h2>Context</h2>
        <p>{c.context}</p>

        <h2>Challenge</h2>
        <ul>{c.challenge.map((x) => <li key={x}>{x}</li>)}</ul>

        <h2>Approach</h2>
        <ul>{c.approach.map((x) => <li key={x}>{x}</li>)}</ul>

        <div className="card diagram-card">
          <Diagram kind={c.diagram} title={`${c.title} — architecture`} />
          <p className="muted small">Simplified, client-neutral view of the pattern used.</p>
        </div>

        <h2>Outcome</h2>
        <ul className="outcomes">{c.outcomes.map((x) => <li key={x}>{x}</li>)}</ul>

        <div className="case-next">
          <span className="muted small">Next case study</span>
          <Link href={`/case-studies/${next.slug}/`}>{next.title} →</Link>
        </div>
      </div>
    </article>
  );
}
