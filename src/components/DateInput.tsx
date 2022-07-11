import { useState, FormEvent, Dispatch, SetStateAction } from 'react';

const DateInput = ({ setDate }: { setDate: Dispatch<SetStateAction<string>> }) => {
  const [ value, setValue ] = useState('');

  const handleChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setValue(target.value);
    setDate(target.value);
  };
  
  return (
    <input onChange={handleChange} value={value} type="date"/>
  );
};

export default DateInput;