import React from 'react';
import QRCode from "qrcode";
import { useState, useEffect } from "react";

function MenuQR() {

    const [src, setSrc] = useState("");

    useEffect(() => {
        QRCode.toDataURL("https://overdose.onrender.com/").then(
            (data) => setSrc(data)
        );
    }, []);

    return (<div>
        <img
            style={{ width: "6rem", height: "6rem" }}
            src={src}
        />
    </div>);
}

export default MenuQR; <div></div>