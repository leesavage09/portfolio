import { Button } from '@stories/Atoms/Button';
import { Heading } from '@stories/Atoms/Heading';
import { Layout, LayoutItem } from '@stories/Atoms/Layout';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CaseStudyProps {
  image: StaticImageData;
  title: string;
  children: string | JSX.Element[] | JSX.Element;
  href: string;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({
  image,
  title,
  children,
  href,
}) => {
  return (
    <Layout columns={2}>
      <LayoutItem className="justify-center">
        <Image
          src={image}
          alt={`${title} image`}
          className="drop-shadow-md"
          width={500}
        />
      </LayoutItem>

      <LayoutItem>
        <div>
          <Heading type="h3">{title}</Heading>
          {children}
          <Button primary label={'Case Study'} className="mt-6" href={href} />
        </div>
      </LayoutItem>
    </Layout>
  );
};
