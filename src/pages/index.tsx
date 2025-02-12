import { Anchor } from '@stories/Atoms/Anchor';
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
      <Anchor id={'home'} />
      <Section className="h-screen" pattern>
        <HomeSection />
      </Section>
      <Anchor id={'about'} />
      <Section pattern>
        <AboutSection />
      </Section>
      <Anchor id={'projects'} />
      <ProjectsSection />
      <Anchor id={'contact'} />
      <Section pattern alternativeBackground>
        <ContactSection />
      </Section>
    </>
  );
}
