import { Common } from '@/assets/svgs';
import solutionsFeatureImg1 from '@/assets/images/feature-section-1.jpg';
import solutionsFeatureImg2 from '@/assets/images/feature-section-2.jpg';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of cloud POS
export const solutionFeatures: SolutionsFeaturesProps = {
  title: 'Maximise Store Efficiency and Operations with Cloud',
  features: [
    {
      smallImage: solutionsFeatureImg1,
      largeImage: solutionsFeatureImg1,
      altText:
        'Restaurant owner serves customers using HUBBO POS for uninterrupted service, efficiency, and real-time reporting.',
      content: [
        {
          icon: Common.OfflineMode,
          title: 'Reliable Offline Mode',
          body: 'Experience uninterrupted service even during internet outages with automatic data syncing and backup',
        },
        {
          icon: Common.Desk,
          title: 'Boost Table Turnover',
          body: 'Boost restaurant efficiency with automated processes, error prevention, and faster table turnover.',
        },
        {
          icon: Common.InstantReporting,
          title: 'Instant Realtime Reporting',
          body: "Gain detailed business insights anytime, anywhere with HUBBO POS powerful business intelligence tools.",
        },
      ],
    },

    {
      smallImage: solutionsFeatureImg2,
      largeImage: solutionsFeatureImg2,
      altText:
        'Customer in orange shirt makes mobile payment using Hubbo POS with eWallets',
      content: [
        {
          icon: Common.SupportChat,
          title: 'Live Support Chat & Comprehensive Help Center',
          body: 'Instantly connect with experts for business support and empower your business with valuable resources through our user-friendly help center.',
        },
        {
          icon: Common.Payment,
          title: 'Seamless Payment Integration',
          body: "Enhance your customers' checkout experience with effortless payments supported by major E-wallet and credit cards.",
        },
        {
          icon: Common.Display,
          title: 'Customer-Friendly Display',
          body: 'Enhance the overall payment experience by allowing customers to preview bill details during payment.',
        },
      ],
    },
  ],
};
