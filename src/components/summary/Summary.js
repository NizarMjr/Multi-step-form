import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { componentID, previousID, specificComponent } from "../../redux/actions/Actions";
import './summary.css'

const Summary = () => {
    const globalID = useSelector(state => state.increaseID)
    const dispatch = useDispatch();
    const planning = useSelector(state => state.setPlanning);
    const list = useSelector(state => state.setList);
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(planning.price)
        for (let i = 0; i < list.length; i++) {
            if (planning.periode === 'month')
                setTotal(t => t + list[i].price);
            else
                setTotal(t => t + list[i].price * 10);
        }
    })
    const previousComponent = () => {
        dispatch(previousID(globalID));
    }
    const nextComponent = () => {
        dispatch(componentID(globalID));
    }
    return (
        <main>
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="summary">
                <div className="summary-plan">
                    <div className="summary-intro">
                        <div>
                            <h4 className="summary-periode">{planning.planning}<span>({planning.periode}ly)</span></h4>
                            <span className="summary-change" onClick={() => dispatch(specificComponent())}>change</span>
                        </div>
                        <span className="summary-price">${planning.price}/{planning.periode}</span>
                    </div>
                    <div className="summary-list">
                        {list.map((ele, index) => {
                            return (
                                <div className="summary-list-ele" key={index}>
                                    <span>{ele.item}</span>
                                    {planning.periode === "month" ? <span>+${ele.price}/{planning.periode}</span> : <span>+${ele.price * 10}/{planning.periode}</span>}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="summary-total">
                    <p>Total per({planning.periode})</p>
                    <span>${total}</span>
                </div>
                <div className="btns">
                    <submit className="back btn" onClick={() => previousComponent()}>Go back</submit>
                    <submit className="submit btn summary-btn" onClick={() => nextComponent()}>Confirm</submit>
                </div>
            </div>
        </main>
    )
}
export default Summary;