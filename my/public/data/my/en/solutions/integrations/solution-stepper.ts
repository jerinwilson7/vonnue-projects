import { SolutionsTemplateProps } from '@/sections/solutions';

const stepsToPay = [
  { step: '1', text: 'Customer order from Food Delivery Platforms ' },
  { step: '2', text: 'HUBBO POS received order ' },
  { step: '3', text: 'Kitchen preparation' },
  { step: '4', text: 'Rider pickup' },
];

export const paymentSteps: SolutionsTemplateProps['paymentSteps'] = {
  title: 'Step-by-step process',
  stepsToPay: stepsToPay,
};
