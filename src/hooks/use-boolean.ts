import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type UseBooleanOutput = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

const useBoolean = (defaultValue = false): UseBooleanOutput => {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
