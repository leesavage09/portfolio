import { Button } from '@stories/Atoms/Button';
import { Heading } from '@stories/Atoms/Heading';
import { ScrollIndicator } from '@stories/Atoms/ScrollIndicator';
import { Subtitle } from '@stories/Atoms/Subtitle';

export const HomeSection = () => (
  <>
    <Heading type="h1">
      HEY, I&apos;M <span className="text-primary">Lee Savage</span>
    </Heading>
    <Subtitle type="L">
      I help startups and established businesses build, modernize, and scale web
      products with code that lasts.
    </Subtitle>
    <Button primary type="scrollTo" scrollTo={'projects'}>
      Projects
    </Button>
    <ScrollIndicator />
  </>
);
