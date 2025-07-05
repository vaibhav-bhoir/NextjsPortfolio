import BlockContact from '@/components/contentBlocks/BlockContact';
import BlockHeaderHero from '@/components/contentBlocks/BlockHeaderHero';
import BlockHeading from '@/components/contentBlocks/BlockHeading';
import BlockHero from '@/components/contentBlocks/BlockHero';
import BlockWorkExperience from '@/components/contentBlocks/BlockWorkExperience';
import HeroBanner from '@/components/HeroBanner';
import React from 'react';

export const BLOCK_COMPONENTS: Record<string, React.FC<any>> = {
  blockHeading: BlockHeading,
  blockHero: BlockHero,
  blockHeaderHero: BlockHeaderHero,
  blockWorkExperience: BlockWorkExperience,
  blockContact: BlockContact,
  heroBanner: HeroBanner,
};
