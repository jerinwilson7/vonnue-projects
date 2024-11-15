import { Common } from '@/assets/svgs';
import { LOCALES } from '@/constants';
import { FAQAndContactProps } from '@/sections/contact/FAQAndContact';

const locale = LOCALES.my;

export const faqAndContact: FAQAndContactProps = {
  title: 'FAQs',
  contactList: [
    {
      target: '_self',
      largeIcon: Common.NewToHubboLg,
      smallIcon: Common.NewToHubboSm,
      title: 'New to Hubbo POS',
      body: 'Schedule a free demo to learn more about HUBBO POS.',
      buttonText: 'Book a demo',
      link: `/request-demo`,
    },
    {
      target: '_blank',
      largeIcon: Common.SupportLg,
      smallIcon: Common.SupportSm,
      title: 'Existing customer?',
      body: 'Check out our help centre for more information.',
      buttonText: 'Learn more',
      link: 'https://help.grab.com/merchant/en-my/9643848352665-HUBBO-POS',
    },
  ],
  // Mail containers data
  contactMail: [
    {
      title: 'For general enquiries :',
      mailTo: 'hello.my@hubbopos.com',
    },
    {
      title: 'For partnership or marketing queries :',
      mailTo: 'marketing.my@hubbopos.com',
    },
  ],
  // FAQ Data
  FAQs: [
    {
      title: 'Why should I opt for HUBBO POS? ',
      body: 'At HUBBO POS our mission is simple- to help restaurants of any size grow and scale effortlessly. Our powerful integrations across delivery platforms, payment channels, credit cards and more means that you can run your business even more efficiently, while enjoying unwavering reliability with cloud. This means that you can focus on what matters- delivery an exceptional dining experience for your customers. ',
    },
    {
      title: 'What kind of F&B business is suited for HUBBO POS?',
      body: `Whether you are operate a standalone kiosk, cloud kitchen, quick service, full service, table service, fine dining HUBBO POS has a custom-built solution for you. Click here to <a href="/${locale}/en/solutions/cloud-pos"><u>learn more</u></a> about our product solutions.`,
    },
    {
      title:
        'What is the main difference between the Silver and Gold packages?',
      body: `With HUBBO POS Gold, you will be able to integrate with food delivery platforms and receive delivery orders on 1 single POS system. Say goodbye to managing multiple devices! \n\nWhat's more, you will be able to update your menu across all delivery platforms with just 1 click. Saving you time and effort.\n\nClick here to <a href="/${locale}/en/pricing"><u>learn more.</u></a>`,
    },
    {
      title:
        'I already have an existing POS hardware. Can I just opt for just the software?',
      body: `Absolutely! We have a wide range of solutions to fit your different needs. Click here to <a href="/${locale}/en/pricing"><u>learn more.</u></a>`,
    },
    {
      title: 'How is the payment billed? ',
      body: `Our packages are currently billed upfront and on an annual basis. If you are opting for the Software and Hardware option, you will only need to pay for the Hardware once at the start. Subsequent billing will be for the Software only. Click here to <a href="/${locale}/en/pricing"><u>learn more.</u></a>`,
    },
  ],
};
