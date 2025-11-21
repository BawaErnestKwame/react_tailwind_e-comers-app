import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DiscountIcon from '@mui/icons-material/Discount';
import SupportIcon from '@mui/icons-material/Support';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import Subscribe from '../HomeFeatures/Subscribe';

const services = [
  {
    icon: <DeliveryDiningIcon className='text-orange-700' />,
    title: 'Free Delivery',
    description: 'Order from all items'
  },
  
  {
    icon: <DiscountIcon className='text-orange-700' />,
    title: 'Discount Offers',
    description: 'Up to 25% off on selected items'
  },
  {
    icon: <SupportIcon className='text-orange-700' />,
    title: '24/7 Support',
    description: 'We are here to help anytime'
  },
  {
    icon: <MoneyOffCsredIcon className='text-orange-700' />,
    title: 'Money Back',
    description: '100% refund within 7 days'
  },
];

const DeliveryInfor = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-100 shadow-md my-6 px-4 md:px-14 lg:px-24 py-6'>
      {services.map((item, index) => (
        <div key={index} className='flex items-center gap-4'>
          <div className="text-3xl">{item.icon}</div>
          <div>
            <h1 className='text-slate-900 font-bold text-sm md:text-base'>{item.title}</h1>
            <p className='text-gray-600 text-xs md:text-sm'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <Subscribe/>
    </>
  );
};

export default DeliveryInfor;
