import AboutUs from '@/assets/svgs/headerIcons/about-us.svg';
import ContactlessOrdering from '@/assets/svgs/headerIcons/contactless-ordering.svg';
import Integrations from '@/assets/svgs/headerIcons/integrations.svg';
import Loyalty from '@/assets/svgs/headerIcons/loyalty.svg';
import NumberCallingSystem from '@/assets/svgs/headerIcons/number-calling-system.svg';
import Reporting from '@/assets/svgs/headerIcons/reporting.svg';
import Vector from '@/assets/svgs/headerIcons/vector.svg';
import { Header } from '@/types/common/header';

export const headerListData: Header = {
  solutionsList: [
    {
      id: 1,
      title: 'Cloud POS',
      icon: Vector,
      link: `/solutions/cloud-pos`,
    },
    {
      id: 2,
      title: 'Number calling system',
      icon: NumberCallingSystem,
      link: `/solutions/number-calling-system`,
    },
    {
      id: 3,
      title: 'Contactless ordering',
      icon: ContactlessOrdering,
      link: `/solutions/contactless-ordering`,
    },
    {
      id: 4,
      title: 'Loyalty',
      icon: Loyalty,
      link: `/solutions/loyalty`,
    },
    {
      id: 5,
      title: 'Integrations',
      icon: Integrations,
      link: `/solutions/integrations`,
    },
    {
      id: 6,
      title: 'Reporting',
      icon: Reporting,
      link: `/solutions/reporting`,
    },
  ],
  whyHubboList: [
    {
      id: 1,
      title: 'About Us',
      icon: AboutUs,
      link: `/about`,
    },
  ],
  contactUsLink: `/contact-us`,
  pricingLink: `/pricing`,
  headerButtonText: 'Get Started',
  headerButtonLink: `/request-demo`,
  requestDemoLink: `/request-demo`,
  requestDemoText: 'Request Free Demo',
  headerLogoLink: `/`,
  solutionsLinkText: 'Solutions',
  plansAndPricingLinkText: 'Plans & Pricing',
  whyHubboLinkText: 'Why HUBBO',
  contactUsLinkText: 'Contact Us',
  loginLinkText: 'Log In',
  loginLink: ' https://admin.hubbopos.com/admin/login',
  languageLinkText: 'Language',
};
