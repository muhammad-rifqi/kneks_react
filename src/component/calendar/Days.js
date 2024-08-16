import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";

export default function Days({ day, rowIdx }) {

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-primary text-white rounded-circle d-inline-block text-center"
            : "";
    }
    return (
        <div className="border border-secondary d-flex flex-column">
            <header className="d-flex flex-column align-items-center">
                {rowIdx === 0 && (
                    <p className="small mt-1">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p className={`small py-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format("DD")}
                </p>
            </header>
        </div>
    )
}
