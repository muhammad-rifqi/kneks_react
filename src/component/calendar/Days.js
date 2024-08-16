import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";

export default function Days({ day, rowIdx }) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-primary text-white rounded-circle p-1 text-center"
            : "";
    }
    return (
        <div className="border border-secondary d-flex flex-column">
            <header className="d-flex flex-column align-items-center">
                {rowIdx === 0 && (
                    <p className="small ">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p className={`small  text-center ${getCurrentDayClass()}`}>
                    {day.format("DD")}
                </p>
            </header>
        </div>
    )
}
