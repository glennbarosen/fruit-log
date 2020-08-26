import React, { useState, FC } from 'react';
import { Fruit } from './Types';

interface FormProps {
    addFruit: (fruit: Fruit) => void
}

const Form = (props: FormProps) => {

    const [fruit, setFruit] = useState({
        name: '',
        taste: '',
        texture: ''
    }
    );
    const handleChange = (e: { target: { value: any; name: any; }; }) => {
        const value = e.target.value;
        setFruit({
            ...fruit,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.addFruit(
            {
                name: fruit.name,
                taste: fruit.taste,
                texture: fruit.texture
            });
        setFruit({
            name: '',
            taste: '',
            texture: ''
        });
    }

    return (
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
    )
}

export default Form;

