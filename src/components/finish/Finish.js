import React, { useState } from "react";
import { useSelector } from "react-redux";
import './finish.css'

const Finish = () => {
    const [finish, setFinish] = useState(false);
    const globalID = useSelector(state => state.increaseID);
    setTimeout(() => {
        globalID === 5 ? setFinish(true) : setFinish(false);
    }, 2000)
    return (
        <>
            {finish === false ? <div class="loader"></div> :
                <main className="finish">
                    <img src="../../../assets/images/icon-thank-you.svg" alt="icon-img" />
                    <h2>Thank You</h2>
                    <p>Thank you for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to mail us at <a href="support@loremgaming.com">support@loremgaming.com</a></p>
                </main>}
        </>

    )
}
export default Finish;