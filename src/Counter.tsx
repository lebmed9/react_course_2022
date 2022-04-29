import React from 'react';

type CounterPropsType = {
  title: string;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);

  const addHeandler = () => {
    setCount(count + step);
  };
  const removeHeandler = () => {
    setCount(count - step);
  };

  return (
    <div>
      <h5>{title}</h5>
      <p>{`${count} шт. добавленно`}</p>
      <div>
        <button type="button" onClick={addHeandler}>
          {`Добавить ${step} ед.`}
        </button>
        <button type="button" onClick={removeHeandler}>
          {`Убрать ${step} ед.`}
        </button>
      </div>
      <div>
        <button type="button" onClick={() => setStep(step + 1)}>
          Увеличить шаг на 1 ед.
        </button>
        <button type="button" onClick={() => setStep(step - 1)}>
          Уменьшить шаг на 1 ед.
        </button>
      </div>
    </div>
  );
};

export default Counter;
