'use client';
import FiltersBar from '@/components/Projects/FiltersBar/FiltersBar';
import ProjectCard, {
  ProjectCardProps,
} from '@/components/Projects/ProjectCard/ProjectCard';
import { useState } from 'react';

type ProjectsPageProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const ProjectsPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const exampleProjectCardData: ProjectCardProps = {
    projectThumbnailSrc: '/',
    updatedDate: new Date('2023/3/14'),
    createdDate: new Date('2023/3/14'),
    projectName: 'פרויקט אקראי 45HG',
    contributorCount: 125,
    contributorAvatars: [
      { imageSrc: '/images/avatars/avatar.jpg?0', name: 'ברוך אודם' },
      { imageSrc: '/images/avatars/avatar.jpg?1', name: 'ברוך אודם' },
    ],
    description: `פסקת תיאור של הפרויקטים פה שתתן חשק לעשייה, שתדבר קצת על הפרויקט ומה
    יש בו, מה מחפשים בדיוק במפתחים שמתנדבים, איזה פונקציות קיימות ואולי
    מה הלך הרוח של הפרויקט. מה שצריך כדי לתת כמה שיותר מידע לככה הכרטיס
    מתרחב כשיש יותר מ-3 שורות. בגדול הטקסט נשאר בגבולות ה700 פיקסלים,
    אבל השפות תכנות והכפתורים יורדים למטה, כשכל השאר נשאר למעלה ותמיד
    נשאר רווח של 24 פיקסלים בין התיבת טקסט לשפות תכנות והכפתורים.`,
    tags: ['Java', 'Python', 'CSS', 'CSS1', 'CSS2', 'CSS3'],
    githubLink: 'https://github.com/Maakaf/maakaf-website',
    discordLink: 'https://discord.gg/ayh8HtRQXk',
  };

  const randomProjectCardData: ProjectCardProps = {
    projectThumbnailSrc: '/path/to/random-thumbnail.jpg',
    updatedDate: new Date('2023/5/10'),
    createdDate: new Date('2023/4/1'),
    projectName: 'פרויקט רנדומלי XYZ',
    contributorCount: 80,
    contributorAvatars: [
      { imageSrc: '/images/avatars/avatar.jpg?0', name: 'אליהו הנביא' },
      { imageSrc: '/images/avatars/avatar2.jpg?0', name: 'מרים לוי' },
      { imageSrc: '/images/avatars/avatar3.jpg?0', name: 'יוסי כהן' },
    ],
    description: `פסקת תיאור של הפרויקט הרנדומלי. פרטים על הפרויקט, הטכנולוגיות שבו, המטרות והאתגרים.`,
    tags: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/random/repo',
    discordLink: 'https://discord.gg/randomlink',
  };

  const randomProjectCardData1: ProjectCardProps = {
    projectThumbnailSrc: '/path/to/random-thumbnail1.jpg',
    updatedDate: new Date('2023/6/15'),
    createdDate: new Date('2023/5/5'),
    projectName: 'פרויקט רנדומלי ABC',
    contributorCount: 50,
    contributorAvatars: [
      { imageSrc: '/images/avatars/avatar3.jpg?0', name: 'דני רוזן' },
      { imageSrc: '/images/avatars/avatar2.jpg?0', name: 'ליהי שפירא' },
    ],
    description: `תיאור של פרויקט ABC. פרטים על הטכנולוגיות, המטרות והאתגרים.`,
    tags: ['Angular', 'Express', 'MySQL'],
    githubLink: 'https://github.com/random/abc-repo',
    discordLink: 'https://discord.gg/abc-link',
  };

  const randomProjectCardData2: ProjectCardProps = {
    projectThumbnailSrc: '/path/to/random-thumbnail2.jpg',
    updatedDate: new Date('2023/7/20'),
    createdDate: new Date('2023/6/10'),
    projectName: 'פרויקט רנדומלי DEF',
    contributorCount: 70,
    contributorAvatars: [
      { imageSrc: '/images/avatars/avatar4.jpg?0', name: 'אילן גולדברג' },
      { imageSrc: '/images/avatars/avatar3.jpg?0', name: 'שרה לוין' },
    ],
    description: `תיאור של פרויקט DEF. פרטים על הטכנולוגיות, המטרות והאתגרים.`,
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/random/def-repo',
    discordLink: 'https://discord.gg/def-link',
  };

  const randomProjectCardData3: ProjectCardProps = {
    projectThumbnailSrc: '/path/to/random-thumbnail3.jpg',
    updatedDate: new Date('2023/8/25'),
    createdDate: new Date('2023/7/15'),
    projectName: 'פרויקט רנדומלי GHI',
    contributorCount: 60,
    contributorAvatars: [
      { imageSrc: '/images/avatars/avatar5.jpg?0', name: 'מיכל כהן' },
      { imageSrc: '/images/avatars/avatar4.jpg?0', name: 'יואב רז' },
    ],
    description: `תיאור של פרויקט GHI. פרטים על הטכנולוגיות, המטרות והאתגרים.`,
    tags: ['Svelte', 'Ruby on Rails', 'SQLite'],
    githubLink: 'https://github.com/random/ghi-repo',
    discordLink: 'https://discord.gg/ghi-link',
  };

  const allProjects = [
    exampleProjectCardData,
    randomProjectCardData,
    randomProjectCardData1,
    randomProjectCardData2,
    randomProjectCardData3,
  ];

  const filteredProjects = allProjects.filter(project =>
      project.projectName.includes(searchValue)
  );

  return (
      <section className="h-full">
        <FiltersBar searchValue={searchValue} setSearchValue={setSearchValue} />
        {filteredProjects.map(project => (
            <ProjectCard key={project.projectName} {...project} />
        ))}
      </section>
  );
};

export default ProjectsPage;