import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './step.css'
const Step = () => {

    const globalID = useSelector(state => state.increaseID);
    useEffect(() => {
        if (globalID <= 4) {
            const steps = document.getElementsByClassName("number");
            for (let i = 0; i < steps.length; i++) {
                if (steps[i].classList.contains("active"))
                    steps[i].classList.remove("active");
            }
            document.getElementById(`step${globalID}`).classList.add("active");
        }

    }, [globalID])
    return (
        <div className="landing">
            <div className="step">
                <span className="number" id="step1">1</span>
                <div className="step-detail">
                    <span >step 1</span>
                    <h3>YOUR INFO</h3>
                </div>
            </div>
            <div className="step">
                <span className="number" id="step2">2</span>
                <div className="step-detail">
                    <span>step 2</span>
                    <h3>SELECT PLAN</h3>
                </div>
            </div>
            <div className="step">
                <span className="number" id="step3">3</span>
                <div className="step-detail">
                    <span>step 3</span>
                    <h3>ADD-ONS</h3>
                </div>
            </div>
            <div className="step">
                <span className="number" id="step4">4</span>
                <div className="step-detail">
                    <span>step 4</span>
                    <h3>SUMMURY</h3>
                </div>
            </div>
        </div>
    )
}
export default Step;