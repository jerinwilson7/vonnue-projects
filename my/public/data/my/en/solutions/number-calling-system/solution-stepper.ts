import { SolutionsTemplateProps } from '@/sections/solutions';

const stepsToPay = [
  { step: '1', text: 'Restaurant receives orders' },
  { step: '2', text: "Order displayed in 'Preparing'" },
  { step: '3', text: 'Food is ready' },
  { step: '4', text: 'Order updated into ready to collect' },
];

export const paymentSteps: SolutionsTemplateProps['paymentSteps'] = {
  title: 'Step-by-step process',
  stepsToPay: stepsToPay,
};
