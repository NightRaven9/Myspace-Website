import Link from 'next/link';
import Diagram from '@/components/Diagram';
import {
  profile,
  stats,
  experience,
  caseStudies,
  architecturePatterns,
  skillGroups,
  systems,
  certifications,
  publications,
  education,
} from '@/data/profile';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">{profile.role}</p>
            <h1>
              Connecting SAP with <span className="accent">everything else</span> your business runs on.
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="hero-actions">
              <Link href="/#case-studies" className="btn btn-primary">View case studies</Link>
              <a href={profile.resumePath} className="btn btn-ghost" download>Download resume</a>
            </div>
            <p className="muted small">{profile.location}</p>
          </div>
          <div className="hero-card" aria-hidden="true">
            <div className="avatar">SD</div>
            <ul className="hero-badges">
              <li>SAP Certified — Integration Suite</li>
              <li>Microsoft AZ-900</li>
              <li>SAP Community author</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat-value">
                  {s.value}
                  <span>{s.suffix}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="about-grid">
            <div>
              <h2>About</h2>
              <p>{profile.summary}</p>
            </div>
            <div>
              <h3 className="h-small">Systems I’ve integrated</h3>
              <ul className="chips">
                {systems.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section section-alt">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="timeline-item">
                <div className="timeline-head">
                  <h3>{job.title} · {job.company}</h3>
                  <span className="muted">{job.period}</span>
                </div>
                <ul>
                  {job.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="section">
        <div className="container">
          <h2>Case studies</h2>
          <p className="section-lead">Selected engagements. Client names are withheld; the work is real.</p>
          <div className="card-grid">
            {caseStudies.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}/`} className="card card-link">
                <p className="eyebrow">{c.client}</p>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <ul className="chips chips-sm">
                  {c.stack.slice(0, 4).map((t) => <li key={t}>{t}</li>)}
                </ul>
                <span className="card-more">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="section section-alt">
        <div className="container">
          <h2>Integration architecture</h2>
          <p className="section-lead">Patterns I design and build, redrawn generically.</p>
          <div className="arch-list">
            {architecturePatterns.map((a) => (
              <article key={a.key} className="card arch">
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
                <Diagram kind={a.key} title={a.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.title} className="card">
                <h3 className="h-small">{g.title}</h3>
                <ul className="chips chips-sm">
                  {g.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section section-alt">
        <div className="container">
          <h2>Certifications & publications</h2>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c.name} className="card cert">
                <span className="cert-issuer">{c.issuer}</span>
                <h3>{c.name}</h3>
                {c.url && <a href={c.url} target="_blank" rel="noreferrer">Verify credential →</a>}
              </div>
            ))}
            {publications.map((p) => (
              <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="card cert card-link">
                <span className="cert-issuer">{p.venue}</span>
                <h3>{p.title}</h3>
                <span className="card-more">Read the blog →</span>
              </a>
            ))}
            <div className="card cert">
              <span className="cert-issuer">Education · {education.year}</span>
              <h3>{education.degree}</h3>
              <p className="muted">{education.school} — {education.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container contact-inner">
          <h2>Let’s talk about your integration landscape</h2>
          <p className="section-lead">
            S/4HANA rollout, Neo → Cloud Foundry move, event-driven redesign or an interface backlog that needs clearing — I’m happy to help.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-ghost" href={profile.resumePath} download>Resume (PDF)</a>
          </div>
        </div>
      </section>
    </>
  );
}
