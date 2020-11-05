import React from "react";
import Spinner from "../Photos/Spinner.gif"
function spinner() {
    return (
        <div>
            <img
                src={Spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt="Loading..."
            />
        </div>
    )
}
export default spinner;