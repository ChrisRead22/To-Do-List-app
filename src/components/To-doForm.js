import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefualt();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="to-do-form" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Add a to-do" 
            value={input}
            name="text" 
            className='to-do-input'
            onChange={handleChange}
            />
            <button className="to-do-button">Add to-do</button>
        </form>
    );
}

export default TodoForm
