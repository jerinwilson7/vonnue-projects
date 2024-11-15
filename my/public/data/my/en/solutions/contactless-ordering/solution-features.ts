import { Common } from '@/assets/svgs';
import solutionsFeatureImg from '@/assets/images/contactless-feature.jpg';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of contactless ordering
export const solutionFeatures: SolutionsFeaturesProps = {
  title: 'Touch Free Convenience for Simplified Ordering',
  features: [
    {
      smallImage: solutionsFeatureImg,
      largeImage: solutionsFeatureImg,
      altText:
        "Customer with phone scans QR for Hubbo POS's table ordering, dynamic service, and order-ahead feature.",
      content: [
        {
          icon: Common.QRCode,
          title: 'Table QR Ordering ',
          body: 'Table QR ordering simplifies the entire dining experience, allowing customers to browse menus, place orders, and pay directly from their smartphones.',
        },
        {
          icon: Common.DynamicQR,
          title: 'Dynamic QR Ordering',
          body: 'Designed for table-service F&Bs, it streamlines operations, reduces manual errors, and enhances efficiency.',
        },
        {
          icon: Common.Container,
          title: 'Order Ahead & Pickup',
          body: 'Offer a genuine Grab & Go experience, allowing your customers to order and pay ahead of time.',
        },
      ],
    },
  ],
};
