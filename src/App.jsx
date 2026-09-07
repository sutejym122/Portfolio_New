import { useEffect, useRef, useState } from "react";
import { projects, roles, skills, contact, proof, lookingFor } from "./content";
import heroShot from "./assets/tracepilot.png";

/* Reveals children once they scroll into view. */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      className="chev"
      width="7"
      height="11"
      viewBox="0 0 7 11"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 1l4.5 4.5L1 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
          Sutej
        </a>
        <ul className="nav-links">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <Reveal>
          <span className="hero-availability">
            <span className="dot" />
            Open to software engineering roles
          </span>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display">
            I build backend systems &mdash; and the tools that keep them
            reliable.
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="lead">
            Sutej &mdash; software engineer working in Python, FastAPI,
            TypeScript and React. Two years across enterprise integration,
            product search and research engineering, plus four products I built
            and shipped on my own.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See my work
            </a>
            <a
              className="btn btn-ghost"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
            <a className="btn btn-plain" href={`mailto:${contact.email}`}>
              Email me
            </a>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <ul className="proof">
            {proof.map((p) => (
              <li key={p.label}>
                <span className="proof-stat">{p.stat}</span>
                <span className="proof-label">{p.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={360}>
        <div className="hero-shot">
          <div className="hero-shot-frame">
            <div className="hero-shot-bar">
              <i style={{ background: "#ff5f57" }} />
              <i style={{ background: "#febc2e" }} />
              <i style={{ background: "#28c840" }} />
            </div>
            <img src={heroShot} alt="TracePilot dashboard" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Project({ project }) {
  const { name, kind, blurb, stack, image, links } = project;
  return (
    <article className="project">
      <div className="project-media">
        <img src={image} alt={`${name} interface`} loading="lazy" />
      </div>
      <div className="project-body">
        <p className="project-eyebrow">{kind}</p>
        <h3 className="h3">{name}</h3>
        <p className="body">{blurb}</p>
        <div className="project-meta">
          {stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="project-links">
          {links.demo && (
            <a
              className="link"
              href={links.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live demo <Chevron />
            </a>
          )}
          {links.source ? (
            <a
              className="link"
              href={links.source}
              target="_blank"
              rel="noreferrer"
            >
              Source <Chevron />
            </a>
          ) : (
            <span className="link-muted">Private repository</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 className="h2">Things I&rsquo;ve built.</h2>
            <p className="lead">
              Four projects taken from an idea through to something that runs.
            </p>
          </div>
        </Reveal>

        <div className="projects">
          {featured.map((p) => (
            <Reveal key={p.name}>
              <Project project={p} />
            </Reveal>
          ))}
        </div>

        <div className="projects projects-grid-2" style={{ marginTop: 22 }}>
          {rest.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Project project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-tint" id="experience">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2 className="h2">Where I&rsquo;ve worked.</h2>
          </div>
        </Reveal>

        <div className="roles">
          {roles.map((role, i) => (
            <Reveal key={role.title + role.org} delay={i * 70}>
              <div className="role">
                <div className="role-when">{role.when}</div>
                <div>
                  <h3 className="h3">{role.title}</h3>
                  <p className="role-org">{role.org}</p>
                  <ul>
                    {role.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Toolkit</p>
            <h2 className="h2">What I work with.</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="skill-groups">
            {skills.map((s) => (
              <div className="skill-group" key={s.group}>
                <h4>{s.group}</h4>
                <ul>
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-tint" id="contact">
      <div className="wrap contact">
        <Reveal>
          <h2 className="display">Hiring? Let&rsquo;s talk.</h2>
        </Reveal>
        <Reveal delay={90}>
          <p className="lead">
            I&rsquo;m looking for my next software engineering role. If any of
            the above fits what you&rsquo;re building, I&rsquo;d like to hear
            about it.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${contact.email}`}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
            >
              Download résumé
            </a>
            <a
              className="btn btn-plain"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <dl className="looking">
            <div>
              <dt>Roles</dt>
              <dd>{lookingFor.roles}</dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>{lookingFor.level}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{lookingFor.stack}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{lookingFor.location}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="small">
          &copy; {new Date().getFullYear()} Sutej. Built with React.
        </span>
        <div className="footer-links">
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
