import CTApricingBannerMob from '@/assets/images/pricing-cta-small.png';
import CTApricingBannerLg from '@/assets/images/pricing-cta-large.png';
import { PricingPageProps } from '@/sections/pricing';

export const pricingBannerData: PricingPageProps['pricingBannerData'] = {
  heading: 'Speak to us for a \nfree consultation',
  description:
    'Need help deciding? Get help from our experts who will guide you through the solutions based on your requirements. Request a demo for a free consultation today.',
  ctaLabel: 'Request Free Demo',
  ctaLink: `/request-demo`,
  mobileImage: CTApricingBannerMob,
  lgImage: CTApricingBannerLg,
  altText:
    'Black Hubbo POS device displaying various dishes and a summary of the order.',
};
