import React from 'react';
import Content from './Content';
import Price from './Price';

type PricePropsType = {
  pricetext: string;
  image: string;
};

const Card = (props: PricePropsType) => {
  const [count, setCount] = React.useState(0);

  const addObject = () => {
    setCount(count + 1);
  };

  const { pricetext, image } = props;

  return (
    <div>
      <div>
        <Content image={image} />
        <Price pricetext={pricetext} />
        <button type="button" onClick={addObject}>
          Добавить в корзину
        </button>
        <div>{count}</div>
      </div>
    </div>
  );
};

export default Card;
