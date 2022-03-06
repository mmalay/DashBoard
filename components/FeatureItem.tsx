import React from 'react';
import Info from './icons/Info';

type Props = {
  title: string;
};

const FeatureItem = ({ title }: Props) => {
  return (
    <div className="flex w-full justify-between my-3 bord border-b-2 border-gray-300">
      <span className="text-sm">{title}</span>
      <Info styles="fill-current text-blue-600" />
    </div>
  );
};

export default FeatureItem;
