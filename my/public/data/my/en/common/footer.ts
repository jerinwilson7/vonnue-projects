import { chooseYourPlanData } from '../pricing/choose-your-plan';
import { FooterProps } from '@/sections/common/footer';
import { Common } from '@/assets/svgs';

// Links for playstore and appstore
const storeLinks = {
  playStoreLink:
    ' https://play.google.com/store/apps/details?id=com.aliments.biz',
  appStoreLink: 'https://apps.apple.com/sg/app/hubbo-pos-business/id1572230787',
};

export const footerData: FooterProps = {
  navLinks: [
    {
      title: 'Solution',
      values: [
        { text: 'Cloud POS', url: `/solutions/cloud-pos` },
        { text: 'Loyalty', url: `/solutions/loyalty` },
        {
          text: 'Contactless Ordering',
          url: `/solutions/contactless-ordering`,
        },
        { text: 'Integrations', url: `/solutions/integrations` },
        { text: 'Reporting', url: `/solutions/reporting` },
        {
          text: 'Number Calling System',
          url: `/solutions/number-calling-system`,
        },
      ],
    },
    {
      title: 'Plans & Pricing',
      values: chooseYourPlanData.priceCardData.map(data => ({
        text: data.title,
        url: `/pricing#${data.id}`,
      })),
    },
    {
      title: 'Company',
      values: [{ text: 'About Us', url: `/about` }],
    },
    {
      title: 'Support',
      values: [
        {
          text: 'Help Centre',
          url: 'https://help.grab.com/merchant/en-my/9643848352665-HUBBO-POS',
        },
        { text: 'Contact Us', url: `/contact-us` },
      ],
    },
  ],
  socialMedia: [
    { link: 'https://www.facebook.com/hubbopos.my/', img: Common.FacebookLogo },
    { link: 'https://www.instagram.com/hubbo.my/', img: Common.InstagramLogo },
  ],
  copyright: {
    content: '',
    linkText: 'Privacy Notice',
    link: 'https://docs.google.com/document/d/e/2PACX-1vTvbWFdaobxK9c7vU3T_nwrcoIlhRp3tLv1vZjYE1jjyRxgQ85w2ZICGbxhtgw7E0qA3oLARMPJKzAItmTqT74/pub',
  },
  enquiryText: ' Need help? Reach us at',
  enquiryLink: 'hello.my@hubbopos.com',
  storeIconsSm: [
    {
      icon: Common.AppStoreSmLink,
      link: storeLinks.appStoreLink,
    },
    {
      icon: Common.GooglePlaySmLink,
      link: storeLinks.playStoreLink,
    },
  ],
  storeIconsMd: [
    {
      icon: Common.AppStoreMdLink,
      link: storeLinks.appStoreLink,
    },
    {
      icon: Common.GooglePlayMdLink,
      link: storeLinks.playStoreLink,
    },
  ],
  storeIconsXl: [
    {
      icon: Common.AppStoreXlLink,
      link: storeLinks.appStoreLink,
    },
    {
      icon: Common.GooglePlayXlLink,
      link: storeLinks.playStoreLink,
    },
  ],
};
