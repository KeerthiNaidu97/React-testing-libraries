import React, {useState} from 'react'

function Counter(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2 className="title">{props.name}</h2>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <h2 className="count">{count}</h2>
        </div>
    );
}

export default Counter
