import BlockHeaderHero from '@/components/contentBlocks/BlockHeaderHero';
import BlockHero from '@/components/contentBlocks/BlockHero';
import BlockWorkExperience from '@/components/contentBlocks/BlockWorkExperience';
import HeroBanner from '@/components/HeroBanner';
import React from 'react';

export const BLOCK_COMPONENTS: Record<string, React.FC<any>> = {
  blockHero: BlockHero,
  blockHeaderHero: BlockHeaderHero,
  blockWorkExperience: BlockWorkExperience,
  heroBanner: HeroBanner,

  // Add more mappings
};
