import React from "react";

export const Title: React.FC<{title:string}> = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}