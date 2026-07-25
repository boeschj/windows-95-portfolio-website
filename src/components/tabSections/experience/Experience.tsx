import { getPublishedExperiences } from '@/data/experiences';
import { toExperienceListItem } from '@/data/experienceView';
import { ExperienceExplorer } from './ExperienceExplorer';

export async function Experience() {
    const experiences = await getPublishedExperiences();
    const items = experiences.map(toExperienceListItem);

    return <ExperienceExplorer items={items} />;
}
