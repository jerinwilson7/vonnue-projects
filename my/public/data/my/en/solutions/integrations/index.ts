import { heroBanner } from './solution-banner';
import { solutionsFilter } from './solution-filter';
import { solutionFeaturesVariantOne } from './solution-features-variant-one';
import { solutionFeaturesVariantTwo } from './solution-features-variant-two';
import { SolutionsTemplateProps } from '@/sections/solutions';
import { footerBanner } from '../../common';
import { integrationPartners } from './integration-partners';

export const integrationsData: SolutionsTemplateProps = {
  heroBanner,
  solutionsFilter,
  solutionsFeaturesVariantOne: solutionFeaturesVariantOne,
  solutionsFeaturesVariantTwo: solutionFeaturesVariantTwo,
  integrationPartners,
  footerBanner,
};
