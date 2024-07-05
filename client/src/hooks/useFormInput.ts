import { useState } from 'react';

const useFormInput = (initialVal: string = '') => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useFormInput;
