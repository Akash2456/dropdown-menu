import React, { useState } from 'react';

function SelectComponent() {
  const [selectedOption, setSelectedOption] = useState('');

  // ...

  return (
    <div>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Select...</option>
        <option value="option1">yes </option>
        <option value="option2">probably not </option>
       
      </select>
    </div>
  );
}
export default SelectComponent;