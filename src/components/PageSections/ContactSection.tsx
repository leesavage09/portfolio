import { Heading } from '@stories/Atoms/Heading';
import { Input } from '@stories/Atoms/Input';
import { Subtitle } from '@stories/Atoms/Subtitle';
import { ContactForm } from '@stories/Molecules/ContactForm';

export const ContactSection = () => (
  <>
    <Heading type="h2">Contact</Heading>
    <Subtitle type="M">
      Feel free to Contact me by submitting the form below and I will get back
      to you as soon as possible
    </Subtitle>
    <ContactForm submitLabel="Send Me An Email">
      <Input id="name" label="Name" placeholder="Enter your Name" />
      <Input id="email" label="Email" placeholder="Enter your Email" />
      <Input
        id="message"
        textArea
        label="Message"
        placeholder="Enter your Message"
      />
    </ContactForm>
  </>
);
