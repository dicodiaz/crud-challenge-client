import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type UseCounterOutput = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
};

const useCounter = (initialValue = 0): UseCounterOutput => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((x) => x + 1), []);
  const decrement = useCallback(() => setCount((x) => x - 1), []);
  const reset = useCallback(() => setCount(initialValue), []);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
};

export default useCounter;
