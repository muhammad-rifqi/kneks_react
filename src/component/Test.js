// import React from "react";

export const Test = () => {

    const getPaidAmount = () => {

        return true;
    };

    const isPaid = getPaidAmount();


    const badgeStyle = {
        display: "inline-block",
        padding: "5px 10px",
        borderRadius: "12px",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    };

    const paidStyle = {
        ...badgeStyle,
        backgroundColor: "green",
    };

    const unpaidStyle = {
        ...badgeStyle,
        backgroundColor: "red",
    };

    return (
        <div
            style={
                isPaid
                    ? paidStyle
                    : unpaidStyle
            }
        >
            {isPaid ? "Sudah dibayar" : "Belum dibayar"}
        </div>
    );
};