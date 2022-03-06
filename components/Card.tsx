import React from 'react';
import Bell from './icons/Bell';
import FeatureItem from './FeatureItem';

type Props = {
  title: string;
  features: string[];
};

const Card = ({ title, features }: Props) => {
  return (
    <div className="w-[23%] m-4 bg-white rounded-md py-3 px-6 h-[17.5rem] shadow-md shadow-gray-300">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="font-bold text-3xl">{title}</span>
        <Bell styles="fill-current text-blue-600" />
      </div>
      <div className="px-4">
        {features.map((feature) => (
          <FeatureItem title={feature} />
        ))}
      </div>
    </div>
  );
};

export default Card;
