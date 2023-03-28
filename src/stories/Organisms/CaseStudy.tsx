import { Button } from '@stories/Atoms/Button';
import { Heading3 } from '@stories/Atoms/Heading3';
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
    <div className="w-full grid grid-cols-2 gap-20">
      <Image src={image} alt={`${title} image`} className="drop-shadow-md" />
      <div>
        <Heading3>Not Instagram</Heading3>
        <p className="text-md text-dark-blue dark:text-blue-100">{children}</p>
        <Button primary label={'Case Study'} className="mt-6" href={href} />
      </div>
    </div>
  );
};
