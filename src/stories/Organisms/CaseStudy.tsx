import { Button } from '@stories/Atoms/Button';
import { Heading } from '@stories/Atoms/Heading';
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
    <div className="w-full grid grid-cols-2 gap-20 mb-36">
      <Image
        src={image}
        alt={`${title} image`}
        className="drop-shadow-md"
        width={500}
      />
      <div className="pt-4">
        <Heading type="h3">{title}</Heading>
        {children}
        <Button primary label={'Case Study'} className="mt-6" href={href} />
      </div>
    </div>
  );
};
