import { useState } from "react";
import wachillLogo from "../assets/watchill.svg";
import { Navigate } from "react-router-dom";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";


function BeAChiller() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
    }

}

export default BeAChiller;