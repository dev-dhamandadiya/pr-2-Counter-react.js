import React, { useEffect, useState } from 'react'
import "./Counter.css";

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const oldValue = JSON.parse(
            localStorage.getItem("counterValue")
        );

        if (oldValue) {
            setCount(oldValue);
        }

    }, []);

    return (
        <>
            <div className="counter-container">

                <h1 className="title">
                    Counter App
                </h1>

                <p className="count-value">
                    {count}
                </p>

                <button
                    className="increase-btn"

                    onClick={() => {

                        const update = count + 1;

                        setCount(update);

                        localStorage.setItem(
                            "counterValue",
                            JSON.stringify(update)
                        );

                    }}
                >
                    Increase
                </button>

                {" "}

                <button
                    className="decrease-btn"

                    onClick={() => {

                        const update = count - 1;

                        setCount(update);

                        localStorage.setItem(
                            "counterValue",
                            JSON.stringify(update)
                        );

                    }}

                    disabled={count <= 0}
                >
                    Decrease
                </button>

                {" "}

                <button
                    className="reset-btn"

                    onClick={() => {

                        setCount(0);

                        localStorage.setItem(
                            "counterValue",
                            JSON.stringify(0)
                        );

                    }}
                >
                    Reset
                </button>

            </div>
        </>
    )
}

export default Counter