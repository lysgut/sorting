import React, { useState } from 'react';

function App() {
  const [array, setArray] = useState([]); // Estado para almacenar el arreglo de números
  const [inputValue, setInputValue] = useState(''); // Estado para el valor del input

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Función para agregar el valor del input al arreglo
  const handleAdd = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setArray([...array, value]);
      setInputValue(''); // Limpiar el input después de agregar
    }
  };

  // Función para ordenar el arreglo usando Bubble Sort
  const handleSort = () => {
    const sortedArray = [...array];
    for (let i = 0; i < sortedArray.length - 1; i++) {
      for (let j = 0; j < sortedArray.length - i - 1; j++) {
        if (sortedArray[j] > sortedArray[j + 1]) {
          // Intercambiar los valores
          const temp = sortedArray[j];
          sortedArray[j] = sortedArray[j + 1];
          sortedArray[j + 1] = temp;
        }
      }
    }
    setArray(sortedArray); // Actualizar el estado con el arreglo ordenado
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
