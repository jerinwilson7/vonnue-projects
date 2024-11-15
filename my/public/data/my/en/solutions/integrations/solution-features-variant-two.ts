import { Common } from '@/assets/svgs';
import solutionsFeatureImg1 from '@/assets/images/integrations-feature-2.png';
import solutionsFeatureImg2Small from '@/assets/images/integrations-feature-3-small.png';
import solutionsFeatureImg2Large from '@/assets/images/integrations-feature-3-large.png';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of integrations - section two
export const solutionFeaturesVariantTwo: SolutionsFeaturesProps = {
  title: 'Open Integrations Beyond Food Delivery',
  backgroundColor: 'bg-background-secondary',
  rowReverseOnOdd: true,
  features: [
    {
      smallImage: solutionsFeatureImg1,
      largeImage: solutionsFeatureImg1,
      altText:
        'Mac laptop surrounded by various payment app icons representing Hubbo POS payment options.',
      content: [
        {
          icon: Common.Payment,
          title: 'Multiple Payment Channels',
          body: 'Our system seamlessly integrates with various payment channels, including credit cards, eWallets, and more, eliminating the need for additional terminals with our all-in-one HUBBO POS device.',
        },
        {
          icon: Common.StreamlinedAccounting,
          title: 'Streamlined Accounting',
          body: 'Simplify financial management with HUBBO POS seamless software integration. It keeps your financial records up to date, allowing you to focus on business growth.',
        },
      ],
    },
    {
      smallImage: solutionsFeatureImg2Small,
      largeImage: solutionsFeatureImg2Large,
      altText:
        'Chef in white apron updates inventory on white tablet using Hubbo POS.',
      content: [
        {
          icon: Common.SupplyChain,
          title: 'Supply Chain Management',
          body: 'Optimise supply chain processes with our smart inventory management system. Reduce waste, receive low stock alerts, and make informed purchasing decisions based on real-time data.',
        },
        {
          icon: Common.ProgressChartIcon,
          title: 'Business Intelligence',
          body: 'Get real-time business intelligence and access automated shopping mall reporting syncs to power your decision making.',
        },
      ],
    },
  ],
};
