import React from 'react';
import '../App.css';

type imageProps = {
  image: string;
};

const Content = (props: imageProps) => {
  const { image } = props;

  return (
    <div className="Flex">
      <div>
        <img className="itemImage" src={image} alt="bmw" />
      </div>
      {/* <div>
        <img className="itemImage" src="/image/volvo.jpg" alt="volvo" />
      </div> */}
    </div>
  );
};

export default Content;
