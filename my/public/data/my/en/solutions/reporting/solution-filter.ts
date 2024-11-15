import filterSmallImage from '@/assets/images/reporting-cta-sm.png';
import filterLargeImage from '@/assets/images/reporting-cta-lg.png';
import { SolutionsFilterProps } from '@/sections/solutions/SolutionFilter';

export const solutionsFilter: SolutionsFilterProps = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    'Hubbo POS sales trend graph from 7th Nov to 7th Dec 2023, indicating gross sales, discounts, and bestsellers.',
  buttonTitle: 'Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'Boost decision-making with impactful data',
  body: "With HUBBO POS's data-driven insights, you can identify top-selling products, monitor inventory levels, and tailor promotions to individual customer preferences.",
};
