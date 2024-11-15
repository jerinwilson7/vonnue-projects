import FormSuccess from '@/assets/images/form-success.svg';
import { FormProps } from '@/components/request-demo/Form';

export const formData: FormProps = {
  successData: {
    title: 'Thanks for your enquiry!',
    description:
      'One of our HUBBO POS staff will get in touch with you within the next 3 working days.',
    image: FormSuccess,
  },
  validationMessages: {
    fullName: {
      required: 'This is required',
      max: 'Name should be at most 80 characters',
    },
    storeName: { required: 'This is required' },
    phoneNumber: {
      required: 'Field is missing',
      typeError: 'Invalid format',
    },
    emailAddress: {
      required: 'Field is missing',
      typeError: 'Invalid format',
    },
    numberOfOutlets: {
      required: 'Field is missing',
      typeError: 'Invalid format',
      min: 'This must be greater than or equal to 0',
      max: 'This must be less than or equal to 100',
    },
    city: { required: 'This is required' },
    form: {
      submittedWithoutTouching: 'All Fields are required',
      submissionError: 'Something went wrong! It’s not you, please try again',
    },
  },
  ctaText: 'Request Free Demo',
  privacyPolicy: {
    text: 'By submitting, you consent to Hubbo collecting, using, disclosing and otherwise processing the provided information to facilitate your better understanding of Hubbo’s services (including sending you relevant offers, promotions, newsletters and other marketing communications, and contacting you to share more about the services), conducting relevant market analysis and related administrative matters in accordance with Hubbo’s Privacy Policy. You may unsubscribe at any time through the channels provided in these communications.',
    linkText: 'Privacy Notice',
  },
  formFieldLabels: {
    fullName: 'Name',
    storeName: 'Store name',
    phoneNumber: 'Phone number',
    emailAddress: 'Email address',
    numberOfOutlets: 'Number of outlets',
    city: 'City',
  },
};
