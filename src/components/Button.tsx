import { useState } from "react";

type ButtonProps = {
    text?: string;
    numb?: number;
    children?: string;
}

export function Button(props: ButtonProps) {
    return (
        <button>{props.text || props.numb || props.children || 'Default'}</button>
    )
}

export function ButtonPlus() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <button onClick={increment} >
            {counter}
        </button>
    )
}