import React from 'react';
import '../App.css';

type PricePropsType = {
  pricetext: string;
};

const Price = (props: PricePropsType) => {
  const { pricetext } = props;

  return <div className="Flex">{pricetext}</div>;
};

export default Price;
