import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { componentID, previousID, setPlan } from "../../redux/actions/Actions";
import './plan.css'

const Plan = () => {
    const globalID = useSelector(state => state.increaseID)
    const dispatch = useDispatch();
    const [periode, changePeriode] = useState('month');
    const [price, setPrice] = useState(9);
    const [planning, setPlanning] = useState('Arcade');
    const [prices, setPrices] = useState([9, 12, 15]);

    //SET BACKGROUND OF BOX SELECTED AND SET ALL INFO ABOUT PLANNING
    const setBackgroundBox = (id, p) => {
        const boxes = document.getElementsByClassName('box');
        for (let i = 0; i < boxes.length; i++)
            if (boxes[i].classList.contains('checked-box')) boxes[i].classList.remove('checked-box');
        document.getElementById(id).classList.add("checked-box");

        setPlanning(document.getElementById(id).childNodes[1].innerHTML);
        setPrice(p);
        dispatch(setPlan(planning, periode, price));
    }
    //ACTIVE TOGGLE BUTTON AND SET INFO ABOUT PERIODE SELECTED
    const setPeriode = (cls) => {
        if (document.getElementsByClassName(cls)[0].classList.contains("toggle")) {
            document.getElementsByClassName(cls)[0].classList.remove("toggle");
            const paragraphes = document.getElementsByClassName("free");
            for (let i = 0; i < paragraphes.length; i++)
                paragraphes[i].classList.add("none");
        }
        else {
            const paragraphes = document.getElementsByClassName("free");
            for (let i = 0; i < paragraphes.length; i++)
                paragraphes[i].classList.remove("none");
            document.getElementsByClassName(cls)[0].classList.add("toggle");
        }
        //CHANGE PERIODE MONTH OR YEAR
        periode === "month" ? changePeriode("year") : changePeriode('month');

        //SET PRICES DEPEND OF PERIODE
        periode === "month" ? setPrices([90, 120, 150]) : setPrices([9, 12, 15]);
        periode === "month" ? setPrice(price * 10) : setPrice(price / 10);
    }

    useEffect(() => {
        dispatch(setPlan(planning, periode, price));
    }, [price])

    useEffect(() => {
        const component = document.getElementsByClassName("component");
        for (let i = 0; i < component.length; i++) {
            component[i].classList.add('none');
        }
        document.getElementsByClassName(`comp${globalID}`)[0].classList.remove('none');
    }, [globalID])
    const nextComponent = () => {
        dispatch(componentID(globalID))
    }
    const previousComponent = () => {
        dispatch(previousID(globalID));
    }
    return (
        <main>
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <div className="boxes">
                <div className="box checked-box" id="box-one" onClick={() => setBackgroundBox("box-one", prices[0])}>
                    <img src="'../../../assets/images/icon-arcade.svg" alt="icon" />
                    <h4>Arcade</h4>
                    <span>${prices[0]}/{periode}</span>
                    <p className="free none">2 months free</p>
                </div>
                <div className="box" id="box-two" onClick={() => setBackgroundBox("box-two", prices[1])}>
                    <img src="'../../../assets/images/icon-advanced.svg" alt="icon" />

                    <h4>Advanced</h4>
                    <span>${prices[1]}/{periode}</span>
                    <p className="free none">2 months free</p>

                </div>
                <div className="box" id="box-three" onClick={() => setBackgroundBox("box-three", prices[2])}>
                    <img src="'../../../assets/images/icon-pro.svg" alt="icon" />

                    <h4>Pro</h4>
                    <span>${prices[2]}/{periode}</span>
                    <p className="free none">2 months free</p>

                </div>
            </div>
            <div className="periode">
                <span className="monthly checked">Monthly</span>
                <button onClick={(() => setPeriode("rounded-btn"))}><span className="rounded-btn"></span></button>
                <span className="yearly">Yearly</span>
            </div>
            <div className="btns">
                <submit className="back btn" onClick={() => previousComponent()}>Go back</submit>
                <submit className="submit btn" onClick={() => nextComponent()}>Next step</submit>
            </div>
        </main>
    )
}
export default Plan;