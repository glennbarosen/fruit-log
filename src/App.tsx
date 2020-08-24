import React, { useState } from 'react';
import { eventNames } from 'process';

type FruitProps = {
  name: string,
  taste: string,
  texture: string
}

const App = () => {

  const [fruit, setFruit] = useState({
    name: '',
    taste: '',
    texture: ''
  });
  const [fruitList, setFruitList] = useState(Array());

  const handleChange = (e: any) => {
    const value = e.target.value;
    setFruit({
      ...fruit,
      [e.target.name]: value
    });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFruitList([
      ...fruitList,
      {
        id: fruitList.length + 1,
        name: fruit.name,
        taste: fruit.taste,
        texture: fruit.texture
      }]);
    setFruit({
      name: '',
      taste: '',
      texture: ''
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>What is the name of the fruit?</label>
        <input
          name='name'
          type='text'
          value={fruit.name}
          autoComplete='off'
          onChange={handleChange} />

        <label>How does it taste?</label>
        <input
          name='taste'
          type='text'
          value={fruit.taste}
          autoComplete='off'
          onChange={handleChange} />

        <label>What is the texture like?</label>
        <input
          name='texture'
          type='text'
          value={fruit.texture}
          autoComplete='off'
          onChange={handleChange} />

        <button>LOG THIS FRUIT</button>
      </form>

      <ul>
        {fruitList.map((fruit) => (
          <div key={fruit.id}>
            <li>
              Name: {fruit.name} <br />
              Taste: {fruit.taste} <br />
              Texture: {fruit.texture}
            </li>
            <br />
          </div>
        ))}
      </ul>
    </div>
  )
}


export default App;
