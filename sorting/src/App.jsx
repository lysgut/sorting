import React, { useState } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  
  const handleAdd = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setArray([...array, value]);
      setInputValue(''); 
    }
  };

  
  const handleSort = () => {
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    setArray(sortedArray); 
  };

  return (
    <div>
      <h1>Ordenamiento</h1>
      <h2>{JSON.stringify(array)}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese valor"
      />
      <button onClick={handleAdd}>Ingresar</button>
      <button onClick={handleSort}>Ordenar</button>
    </div>
  );
}

export default App;
