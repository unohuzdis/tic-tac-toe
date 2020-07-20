import React from "react";

const Square = ({ value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;

    //value is x or o
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;