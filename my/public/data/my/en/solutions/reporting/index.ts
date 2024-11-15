import { SolutionsTemplateProps } from '@/sections/solutions';
import { heroBanner } from './solution-banner';
import { solutionsFilter } from './solution-filter';
import { solutionFeatures } from './solution-features';
import { solutionFilterTwo } from './solution-filter-two';
import { footerBanner } from '../../common';

export const reportingData: SolutionsTemplateProps = {
  heroBanner,
  solutionsFilter,
  solutionsFeaturesVariantOne: solutionFeatures,
  solutionFilterTwo,
  footerBanner,
};
