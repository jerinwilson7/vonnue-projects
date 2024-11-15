import { heroBanner } from './solution-banner';
import { solutionsFilter } from './solution-filter';
import { solutionFeatures } from './solution-features';
import { paymentSteps } from './solution-stepper';
import { SolutionsTemplateProps } from '@/sections/solutions';
import { footerBanner } from '../../common';

export const loyaltyData: SolutionsTemplateProps = {
  heroBanner,
  solutionsFilter,
  solutionsFeaturesVariantOne: solutionFeatures,
  paymentSteps,
  footerBanner,
};
