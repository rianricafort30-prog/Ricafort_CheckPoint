import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <section className="hero-content">
        <p className="eyebrow">Welcome to my personal website</p>

        <h1>
          Hello, I&apos;m <span>Rian Bulilan Ricafort</span>
        </h1>

        <p className="intro">
          I&apos;m a student who enjoys learning technology and building simple,
          useful websites.
        </p>

        <div className="actions">
          <Link href="/projects" className="button button-primary">
            View Projects
          </Link>
          <Link href="/about" className="button button-secondary">
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}
