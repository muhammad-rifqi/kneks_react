import React from "react";
import Day from "./Days";
export default function Month({ month }) {
    return (
        <>
            <div className="d-flex flex-grow-1">
                <div className="container-fluid">
                    {month.map((row, i) => (
                        <div className="row" key={i}>
                            {row.map((day, idx) => (
                                <div className="col" key={idx}>
                                    <Day day={day} rowIdx={i} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}