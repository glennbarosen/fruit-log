import React, { useState } from 'react';
import { Fruit } from './Types';

interface ListProps {
    fruitList: Array<Fruit>
    deleteFruit: (fruit: Fruit) => (e: any) => void
}

const List = (props: ListProps) => {
    return (
        <ul>
            {props.fruitList.map((fruit) => (
                <div key={fruit.id}>
                    <li>
                        Name: {fruit.name} <br />
              Taste: {fruit.taste} <br />
              Texture: {fruit.texture}
                    </li>
                    <button onClick={props.deleteFruit(fruit)}>Delete fruit</button>
                    <br />
                </div>
            ))}
        </ul>
    )
}

export default List;