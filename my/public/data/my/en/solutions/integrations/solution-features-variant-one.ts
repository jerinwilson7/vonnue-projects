import { Common } from '@/assets/svgs';
import solutionsFeatureImg from '@/assets/images/integrations-feature-1.jpg';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of integrations - section one
export const solutionFeaturesVariantOne: SolutionsFeaturesProps = {
  title: 'Simplify All Your Orders in One Place',
  features: [
    {
      smallImage: solutionsFeatureImg,
      largeImage: solutionsFeatureImg,
      altText:
        'Restaurant manager adds a menu item on a black touchscreen tablet using Hubbo POS.',
      content: [
        {
          icon: Common.Restaurant,
          title: 'Tailored for Major Delivery Platforms',
          body: 'Our innovative system is designed to meet the needs of restaurants operating on various food delivery platforms, including GrabFood, Foodpanda, and ShopeeFood.',
        },
        {
          icon: Common.OrderSyncing,
          title: 'Automated Order Syncing',
          body: 'With HUBBO POS, all integrated delivery orders are effortlessly synchronized without the need for manual intervention, guaranteeing accuracy and less operational overhead.',
        },
        {
          icon: Common.Menu,
          title: 'Keep your menu updated with ease',
          body: 'Keep your menu updated easily. HUBBO POS simplifies menu updates across both offline and food delivery platforms with a single click.',
        },
      ],
    },
  ],
};
