import React from "react";



const Slot = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x === y && y === z) {
        return (
            <>
                <div>
                    <h1> {x} {y} {z}</h1>
                    <h1> all thing are matching </h1>
                    <hr />
                </div>

            </>
        );
    } else {
        return (
            <>
                <div>
                    <h1> {x} {y} {z}</h1>
                    <h1> all thing are not  matching </h1>
                    <hr />
                </div>
            </>
        );


    }
};

export default Slot;