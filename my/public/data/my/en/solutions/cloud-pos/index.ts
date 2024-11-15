import { SolutionsTemplateProps } from '@/sections/solutions';
import { heroBanner } from './solution-banner';
import { solutionsFilter } from './solution-filter';
import { solutionFeatures } from './solution-features';
import { footerBanner } from '../../common';

export const cloudPOSData: SolutionsTemplateProps = {
  heroBanner,
  solutionsFilter,
  solutionsFeaturesVariantOne: solutionFeatures,
  footerBanner,
};
