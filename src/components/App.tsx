import React, { useState } from 'react';
import { Fruits, Fruit } from './Types';

const App = () => {
  const [fruit, setFruit] = useState({
    name: '',
    taste: '',
    texture: ''
  }
  );
  const [fruitList, setFruitList] = useState([] as Fruits);

  const handleChange = (e: { target: { value: any; name: any; }; }) => {
    const value = e.target.value;
    setFruit({
      ...fruit,
      [e.target.name]: value
    });
  }
  const handleSubmit = (e: { preventDefault: () => void; }) => {
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
  const deleteFruit = (fruit: Fruit) => (e: any) => {
    setFruitList(fruitList
      .filter(otherFruit => otherFruit !== fruit));
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
        <br />

        <label>How does it taste?</label>
        <input
          name='taste'
          type='text'
          value={fruit.taste}
          autoComplete='off'
          onChange={handleChange} />
        <br />

        <label>What is the texture like?</label>
        <input
          name='texture'
          type='text'
          value={fruit.texture}
          autoComplete='off'
          onChange={handleChange} />
        <br />

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
            <button onClick={deleteFruit(fruit)}>Delete fruit</button>
            <br />
          </div>
        ))}
      </ul>
    </div>
  )

}

export default App;
