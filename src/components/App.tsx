import React, { useState, FC } from 'react';
import { Fruits, Fruit } from './Types';
import Form from './Form';
import List from './List';

const App: FC = () => {

  const initialArray: Array<Fruit> = [{
    id: 1,
    name: 'Apple',
    taste: 'Good',
    texture: 'Crunchy'
  },
  {
    id: 2,
    name: 'Orange',
    taste: 'Great',
    texture: 'soft'
  }]
  const [fruitList, setFruitList] = useState(initialArray as Fruits);

  const addFruit = (fruit: Fruit) => {
    setFruitList([...fruitList,
    {
      id: fruitList.length + 1,
      name: fruit.name,
      taste: fruit.taste,
      texture: fruit.texture
    }])
  }
  const deleteFruit = (fruit: Fruit) => (e: any) => {
    setFruitList(fruitList
      .filter(otherFruit => otherFruit !== fruit));
  }

  return (
    <div>
      <Form addFruit={addFruit} />
      <List fruitList={fruitList} deleteFruit={deleteFruit} />
    </div>
  )

}

export default App;
