import { PricingTableProps } from '@/sections/pricing/PricingPlanComparisonTable';

const planDetailsData: PricingTableProps['planDetails'] = {
  data: {
    'Silver Basic': {
      subTitle: 'Microbusinesses',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
      ],
      annualPricing: 'RM 990',
      pricingPerDay: 'RM2.7/day',
      annualPriceAfterSecondYear: '',
      pricingPerDayAfterSecondYear: '',
      isActive: false,
      buttonLink: '',
    },
    'Gold Basic': {
      subTitle: 'Small businesses',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
        'Delivery Platform Integration',
      ],
      annualPricing: 'RM 1,490',
      pricingPerDay: 'RM4/day',
      annualPriceAfterSecondYear: '',
      pricingPerDayAfterSecondYear: '',
      isActive: true,
      buttonLink: '',
    },
    'Silver Plus': {
      subTitle: 'Medium businesses',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
        '1x Single-screen POS device with built-in NFC Reader',
        'Membership',
      ],
      annualPricing: 'RM 2,590',
      pricingPerDay: 'RM7/day',
      annualPriceAfterSecondYear: 'RM 990',
      pricingPerDayAfterSecondYear: 'RM2.7/day',
      isActive: false,
      buttonLink: '',
    },
    'Silver Pro': {
      subTitle: 'Large businesses',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
        'Membership',
        '1x Dual screen POS device with NFC Reader',
        '1x QR scanner',
      ],
      annualPricing: 'RM 3,490',
      pricingPerDay: 'RM9.5/day',
      annualPriceAfterSecondYear: 'RM 990',
      pricingPerDayAfterSecondYear: 'RM2.7/day',
      isActive: false,
      buttonLink: '',
    },
    'Gold Plus': {
      subTitle: 'Medium businesses',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
        'Delivery Platform Integration',
        '1x Single-screen POS device with built-in NFC Reader',
        'Membership',
      ],
      annualPricing: 'RM 3,090',
      pricingPerDay: 'RM8.4/day',
      annualPriceAfterSecondYear: 'RM 1,490',
      pricingPerDayAfterSecondYear: 'RM4/day',
      isActive: false,
      buttonLink: '',
    },
    'Gold Pro': {
      subTitle: 'Enterprises',
      features: [
        'Integrated Cloud POS',
        'Ewallet & Credit Card Payment Integrations',
        'QR Ordering',
        'Cashback Loyalty',
        'Inventory Management',
        'Payment Terminal Integration',
        'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
        'Dedicated Live Agent Support & Help Centre',
        'Delivery Platform Integration',
        'Membership',
        '1x Dual screen POS device with NFC Reader',
        '1x QR scanner',
      ],
      annualPricing: 'RM 3,990',
      pricingPerDay: 'RM10.9/day',
      annualPriceAfterSecondYear: 'RM 1,490',
      pricingPerDayAfterSecondYear: 'RM4/day',
      isActive: true,
      buttonLink: '',
    },
  },
  allFeatures: [
    'Integrated Cloud POS',
    'Ewallet & Credit Card Payment Integrations',
    'QR Ordering',
    'Cashback Loyalty',
    'Inventory Management',
    'Payment Terminal Integration',
    'Biztory / SQL Accounting / Autocount / Quickbook / Xero / Financio Integration',
    'Dedicated Live Agent Support & Help Centre',
    'Delivery Platform Integration',
    '1x Single-screen POS device with built-in NFC Reader',
    '1x Dual screen POS device with NFC Reader',
    '1x QR scanner',
  ],
};

export const pricingPlanData: PricingTableProps = {
  heading: 'Full plan Comparison',
  subHeading:
    'Hardware cost is a one-time payment only. Price is exclusive of tax and setup fee.',
  planDetails: planDetailsData,
  columnTitleOne: 'Software only',
  columnTitleTwo: 'Software & Hardware',
  ctaLabel: 'Get Started',
  pricingTag: 'Annual Pricing',
  annualTag: '1st year',
  pricingPerDayTag: 'Est. Pricing per day',
  softwareOnlyCount: 3,
  secondYearPricingEyebrow: 'Annual Pricing',
  secondYearPricingTitle: '2nd year onwards',
  secondYearPricingSubText: '(Excludes hardware cost)',
  ctaLabelBottom: 'Request Free Demo',
  ctaLinkBottom: `/request-demo`,
};
