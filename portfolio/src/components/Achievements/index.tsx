import FadeIn from '@/components/FadeIn';
import { ACHIEVEMENTS } from '@/data';
import './styles.css';

function AchievementCard({
    achievement,
    delay,
}: {
    achievement: (typeof ACHIEVEMENTS)[number];
    delay: number;
}) {
    const { title, context, stat, statLabel, description } = achievement;

    return (
        <FadeIn delay={delay}>
            <div className='ach-card'>
                <div className='ach-stat'>{stat}</div>
                <div className='ach-stat-label'>{statLabel}</div>
                <h3 className='ach-title'>{title}</h3>
                <div className='ach-context'>{context}</div>
                <p className='ach-desc'>{description}</p>
            </div>
        </FadeIn>
    );
}

export default function Achievements() {
    return (
        <>
            <section id='achievements'>
                <div className='ach-inner'>
                    <FadeIn>
                        <div className='sec-label'>Impact by numbers</div>
                        <h2 className='section-heading'>Achievements</h2>
                    </FadeIn>

                    <div className='ach-grid'>
                        {ACHIEVEMENTS.map((a, i) => (
                            <AchievementCard
                                key={a.title}
                                achievement={a}
                                delay={i * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
