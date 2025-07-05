import React from 'react';
import ContactForm from '../ContactForm';

interface BlockContactProps {
  sectionTitle: string;
  sectionSubtitle: string;
  heading?: string;
  subheading?: string;
}

const BlockContact: React.FC<BlockContactProps> = ({ heading, subheading }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 ">
        <ContactForm heading={heading} subheading={subheading} />
      </div>
    </div>
  );
};

export default BlockContact;
