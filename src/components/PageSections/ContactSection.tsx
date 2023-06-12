import { Heading } from '@stories/Atoms/Heading';
import { Subtitle } from '@stories/Atoms/Subtitle';
import { ContactForm } from '@stories/Molecules/ContactForm';

export const ContactSection = () => (
  <>
    <Heading type="h2">Contact</Heading>
    <Subtitle type="M">
      Feel free to Contact me by submitting the form below and I will get back
      to you as soon as possible
    </Subtitle>
    <ContactForm />
  </>
);
