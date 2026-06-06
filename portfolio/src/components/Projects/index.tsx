import FadeIn from '@/components/FadeIn';
import { PROJECTS } from '@/data';
import './styles.css';

function ProjectCard({
    project,
    delay,
}: {
    project: (typeof PROJECTS)[number];
    delay: number;
}) {
    const { name, subtitle, tag, color, description, highlights, tech } =
        project;

    return (
        <FadeIn delay={delay}>
            <div className='project-card'>
                <div className='pcard-header'>
                    <div>
                        <span
                            className='tag-pill'
                            style={{ background: `${color}18`, color }}
                        >
                            {tag}
                        </span>
                        <h3 className='pcard-name'>{name}</h3>
                        <p className='pcard-sub'>{subtitle}</p>
                    </div>
                    <div
                        className='pcard-dot'
                        style={{
                            background: color,
                            boxShadow: `0 0 12px ${color}66`,
                        }}
                    />
                </div>

                <p className='pcard-desc'>{description}</p>

                <ul className='pcard-highlights'>
                    {highlights.map((h) => (
                        <li key={h}>
                            <span style={{ color }}>›</span>
                            {h}
                        </li>
                    ))}
                </ul>

                <div className='pcard-techs'>
                    {tech.map((t) => (
                        <span key={t} className='pcard-tech-pill'>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default function Projects() {
    return (
        <>
            <section id='projects'>
                <FadeIn>
                    <div className='sec-label'>Selected work</div>
                    <h2 className='section-heading'>Projects</h2>
                </FadeIn>

                <div className='projects-grid'>
                    {PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            delay={i * 80}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
