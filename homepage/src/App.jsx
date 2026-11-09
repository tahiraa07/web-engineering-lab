const NAME = "Tahira";
const EMAIL = "tahirafarooque26@gmail.com";

// Edit these with your real projects and links.
const projects = [
  { title: "Personal Homepage", text: "This site: a responsive React portfolio, deployed automatically from GitHub.", tags: ["React", "Vite", "CSS"], href: "https://github.com/your-username/my-homepage" },
  { title: "Data Exploration Notebook", text: "A first look at a public dataset: cleaning, charts and simple findings.", tags: ["Python", "Pandas", "Jupyter"], href: "https://github.com/your-username/data-exploration" },
  { title: "Intro ML Model", text: "A beginner machine learning project that predicts an outcome from a small dataset.", tags: ["Python", "scikit-learn"], href: "https://github.com/your-username/intro-ml" },
];

const skills = ["HTML & CSS", "JavaScript", "React", "Python", "Git & GitHub", "Data analysis"];

function thumb(n) {
  const shades = ["#7ee0c3", "#8aa4ff", "#f0b27a"];
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 180'><rect width='320' height='180' fill='#1b1d22'/><rect x='28' y='28' width='120' height='10' rx='5' fill='${shades[n]}'/><rect x='28' y='54' width='264' height='8' rx='4' fill='#e9e9ea' opacity='.25'/><rect x='28' y='72' width='210' height='8' rx='4' fill='#e9e9ea' opacity='.25'/><rect x='28' y='120' width='60' height='36' rx='6' fill='${shades[n]}' opacity='.8'/><rect x='100' y='104' width='60' height='52' rx='6' fill='${shades[n]}' opacity='.5'/><rect x='172' y='88' width='60' height='68' rx='6' fill='${shades[n]}' opacity='.3'/></svg>`
  )}`;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top">{NAME}</a>
        <nav aria-label="Main">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div>
            <h1>Web developer, growing into machine learning.</h1>
            <p>I'm {NAME}, a third-year computer science student who builds for the web and is learning to make sense of data.</p>
            <a className="btn" href="#projects">See my projects</a>
          </div>
          <img src="/avatar.svg" width="240" height="240" alt={`Illustrated portrait of ${NAME}`} />
        </section>

        <section id="about" aria-labelledby="about-h">
          <h2 id="about-h">About</h2>
          <p>I'm a third-year computer science undergraduate. I'm working towards a career in machine learning and have a growing interest in data science. Along the way I build web projects to practise clean, accessible code.</p>
        </section>

        <section id="projects" aria-labelledby="projects-h">
          <h2 id="projects-h">Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <article key={p.title} className="card">
                <img src={thumb(i)} width="320" height="180" loading="lazy" alt={`Illustration for the ${p.title} project`} />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <p className="tags">{p.tags.join(", ")}</p>
                <a href={p.href}>View on GitHub</a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-h">
          <h2 id="skills-h">Skills</h2>
          <ul className="skills">
            {skills.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-h">
          <h2 id="contact-h">Contact</h2>
          <p>Have a project, internship or question? Send me an email.</p>
          <a className="btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {NAME}. Built with React and deployed on Vercel.</p>
      </footer>
    </>
  );
}
