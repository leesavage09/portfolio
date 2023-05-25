import { Section } from '@stories/Atoms/Section';
import Head from 'next/head';
import { AboutSection } from '../components/PageSections/AboutSection';
import { ContactSection } from '../components/PageSections/ContactSection';
import { HomeSection } from '../components/PageSections/HomeSection';
import { ProjectsSection } from '../components/PageSections/ProjectsSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Developer | Lee Savage</title>
      </Head>
      <Section id="home" className="h-screen" pattern>
        <HomeSection />
      </Section>
      <Section id="about">
        <AboutSection />
      </Section>
      <Section id="projects">
        <ProjectsSection />
      </Section>
      <Section pattern id="contact">
        <ContactSection />
      </Section>
    </>
  );
}
