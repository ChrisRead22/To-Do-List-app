import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

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
            name='text' 
            className='to-do-input'
            onChange={handleChange}
            ref={inputRef} />
            <button className="to-do-button">Add to-do</button>
        </form>
    );
}

export default TodoForm
