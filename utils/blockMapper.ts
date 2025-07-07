import BlockContact from '@/components/contentBlocks/BlockContact';
import BlockHeaderHero from '@/components/contentBlocks/BlockHeaderHero';
import BlockHeading from '@/components/contentBlocks/BlockHeading';
import BlockTwoColumn from '@/components/contentBlocks/BlockTwoColumn';
import BlockWorkExperience from '@/components/contentBlocks/BlockWorkExperience';
import React from 'react';

export const BLOCK_COMPONENTS: Record<string, React.FC<any>> = {
  blockHeading: BlockHeading,
  blockHeaderHero: BlockHeaderHero,
  blockTwoColumn: BlockTwoColumn,
  blockWorkExperience: BlockWorkExperience,
  blockContact: BlockContact,
};
