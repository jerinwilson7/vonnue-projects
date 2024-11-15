import { PricingPageProps } from '@/sections/pricing';

export const chooseYourPlanData: PricingPageProps['chooseYourPlanData'] = {
  title: 'Choose your plan',
  priceCardData: [
    {
      priceCards: [
        {
          isSelected: false,
          selectedBannerText: 'BEST VALUE',
          planName: 'Silver Basic',
          pricePrefix: 'RM',
          price: '990',
          priceSpanMain: 'Billed annually',
          priceSpanSub: '',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'default item',
            },
          ],
        },
        {
          isSelected: true,
          selectedBannerText: 'BEST VALUE',
          planName: 'Gold Basic',
          pricePrefix: 'RM',
          price: '1,490',
          priceSpanMain: 'Billed annually',
          priceSpanSub: '',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'Additional features',
              bulletPoints: ['Delivery Platform Integration'],
              itemValue: 'second item',
            },
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'default item',
            },
          ],
        },
      ],
      title: 'Software Only',
      id: 'software-only',
      description:
        'Hardware cost is a one-time payment only. Price is exclusive of tax and setup fee.',
      defaultOpen: ['default item', 'second item'],
    },
    {
      priceCards: [
        {
          isSelected: false,
          selectedBannerText: 'BEST VALUE',
          planName: 'Silver Plus',
          pricePrefix: 'RM',
          price: '2,590',
          priceSpanMain: 'Payable first year; ',
          priceSpanSub: 'RM 990 annually after',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'Additional features',
              bulletPoints: [
                '1x Single-screen POS device with built-in NFC Reader',
              ],
              itemValue: 'default item',
            },
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'second item',
            },
          ],
        },
        {
          isSelected: false,
          selectedBannerText: 'BEST VALUE',
          planName: 'Silver Pro',
          pricePrefix: 'RM',
          price: '3,490',
          priceSpanMain: 'Payable first year; ',
          priceSpanSub: 'RM 990 annually after',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'Additional features',
              bulletPoints: [
                '1x Dual screen POS device with NFC Reader',
                '1x QR scanner',
              ],
              itemValue: 'default item',
            },
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'second item',
            },
          ],
        },
        {
          isSelected: false,
          selectedBannerText: 'BEST VALUE',
          planName: 'Gold Plus',
          pricePrefix: 'RM',
          price: '3,090',
          priceSpanMain: 'Payable first year; ',
          priceSpanSub: 'RM 1,490 annually after',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'Additional features',
              bulletPoints: [
                '1x Single-screen POS device with built-in NFC Reader',
                'Delivery platform integrations',
              ],
              itemValue: 'default item',
            },
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'second item',
            },
          ],
        },
        {
          isSelected: true,
          selectedBannerText: 'BEST VALUE',
          planName: 'Gold Pro',
          pricePrefix: 'RM',
          price: '3,990',
          priceSpanMain: 'Payable first year; ',
          priceSpanSub: 'RM 1,490 annually after',
          buttonText: 'Request Free Demo',
          buttonLink: `/request-demo`,
          accordionItems: [
            {
              accordionHeader: 'Additional features',
              bulletPoints: [
                '1x Dual screen POS device with NFC Reader',
                '1x QR scanner',
                'Delivery platform integrations',
              ],
              itemValue: 'default item',
            },
            {
              accordionHeader: 'What you’ll get:',
              bulletPoints: [
                'Integrated Cloud POS',
                'Ewallet & Credit Card Payment Integration',
                'QR Ordering',
                'Cashback Loyalty',
                'Inventory Management',
                'Payment Terminal Integration',
                'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
                'Dedicated Live Agent Support & Help Centre',
              ],
              itemValue: 'second item',
            },
          ],
        },
      ],
      title: 'Software & Hardware',
      id: 'software-and-hardware',
      description:
        'Hardware cost is a one-time payment only. Price is exclusive of tax and setup fee.',
      defaultOpen: ['default item'],
    },
  ],
};
