import { SolutionsTemplateProps } from '@/sections/solutions';
import { heroBanner } from './solution-banner';
import { solutionsFilter } from './solution-filter';
import { solutionFeatures } from './solution-features';
import { paymentSteps } from './solution-stepper';
import { footerBanner } from '../../common';

export const numberCallingSystemData: SolutionsTemplateProps = {
  heroBanner,
  solutionsFilter,
  solutionsFeaturesVariantOne: solutionFeatures,
  paymentSteps,
  footerBanner,
};
