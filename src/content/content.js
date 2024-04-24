import nameicon from '../assets/nameicon.svg';
import emailicon from '../assets/emailicon.svg';
import phoneicon from '../assets/phoneicon.svg';
import companyicon from '../assets/companyicon.svg';
import development from '../assets/development.svg';
import web from '../assets/web.svg';
import marketing from '../assets/marketing.svg';
import other from '../assets/other.svg';

const content = {
  steps: [1, 2, 3, 4],

  contactData: [
    {
      name: 'contactName',
      label: 'Name',
      placeholder: 'John Carter',
      icon: nameicon
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Email Address',
      icon: emailicon
    },
    {
      name: 'phone',
      label: 'Phone Number',
      placeholder: '(123) 456 - 7890',
      icon: phoneicon
    },
    {
      name: 'company',
      label: 'Company',
      placeholder: 'Company name',
      icon: companyicon
    }
  ],

  servicesData: [
    {
      name: 'development',
      label: 'Development',
      icon: development
    },
    {
      name: 'webDesign',
      label: 'Web Design',
      icon: web
    },
    {
      name: 'marketing',
      label: 'Marketing',
      icon: marketing
    },
    {
      name: 'other',
      label: 'Other',
      icon: other
    }
  ],

  radioOptions: [
    {
      name: '$5.000 - $10.000'
    },
    {
      name: '$10.000 - $20.000'
    },
    {
      name: '$20.000 - $50.000'
    },
    {
      name: '$50.000 +'
    }
  ]
};

export default content;
