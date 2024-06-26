// Ви створюєте компонент форми у React. Ви маєте поле введення, в якому ви хочете відстежити зміни. Для цього ви використовуєте обробник подій onChange. Ваше завдання – правильно типізувати подію, яка передається у цю функцію.


import React, { useState } from 'react';
// type UseFormInput = {
  // value: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//  
// };

export function FormComponent(){
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}
