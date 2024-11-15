import { SolutionsTemplateProps } from '@/sections/solutions';

const stepsToPay = [
  { step: '1', text: 'Customer makes payment' },
  { step: '2', text: 'POS prints invoice with cashback QR' },
  { step: '3', text: 'Customer scans QR to claim cashback' },
  { step: '4', text: 'Customer revisits before cashback expiry' },
];

export const paymentSteps: SolutionsTemplateProps['paymentSteps'] = {
  title: 'Step-by-step process',
  stepsToPay: stepsToPay,
};
