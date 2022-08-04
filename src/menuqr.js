import React from 'react';
import QRCode from "qrcode";
import { useState, useEffect } from "react";

function MenuQR() {

    const [src, setSrc] = useState("");

    useEffect(() => {
        QRCode.toDataURL("https://seniorproject-frontend.herokuapp.com/menu").then(
            (data) => setSrc(data)
        );
    }, []);

    return (<div>
        <img
            style={{ width: "5rem", height: "5rem" }}
            src={src}
        />
    </div>);
}

export default MenuQR; <div></div>