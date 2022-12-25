import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { componentID } from "../../redux/actions/Actions";

import './personal.css'
const Personal = () => {
    const globalID = useSelector(state => state.increaseID)
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const component = document.getElementsByClassName("component");
        for (let i = 0; i < component.length; i++) {
            component[i].classList.add('none');
        }
        document.getElementsByClassName(`comp${globalID}`)[0].classList.remove('none');
    }, [globalID])
    const nextComponent = (e) => {
        if (document.querySelector("input[type=text").value === '') {
            document.querySelector("input[type = text]").classList.add('required');
            document.getElementsByClassName('alert-text')[0].classList.remove('none')
        }

        if (document.querySelector("input[type=email").value === '') {
            document.querySelector("input[type = email]").classList.add('required');
            document.getElementsByClassName('alert-email')[0].classList.remove('none')
        }
        if (document.querySelector("input[type=tel").value === '') {
            document.querySelector("input[type = tel]").classList.add('required');
            document.getElementsByClassName('alert-tel')[0].classList.remove('none')
        }

        var next = false;
        if (input && email && number) {
            if (!email.includes('@')) {
                document.querySelector("input[type = email]").classList.add('required');
                document.getElementsByClassName('alert-email')[0].classList.remove('none')
            }

            else if (typeof (!Number(number)) && Number(number) != number) {
                document.querySelector("input[type = tel]").classList.add('required');
                document.getElementsByClassName('alert-tel')[0].classList.remove('none');
            }
            else next = true;

            if (next)
                dispatch(componentID(globalID))
        }
    }
    const initialState = (type) => {
        document.querySelector(`input[type=${type}]`).classList.remove('required');
        document.getElementsByClassName(`alert-${type}`)[0].classList.add('none');
    }
    return (
        <main className="personal">
            <h2>Personal info</h2>
            <p>Please provide, email address and phone number</p>
            <form>
                <label>Name</label>
                <input type="text" required onChange={(e) => { setInput(e.target.value); initialState("text") }} />
                <p className="alert alert-text none">This field is required</p>
                <label>Email</label>
                <input type="email" required onChange={(e) => { setEmail(e.target.value); initialState("email") }} />
                <p className="alert alert-email none">This field is required</p>
                <label>Phone Number</label>
                <input type="tel" required placeholder="e.g +1234567890" onChange={(e) => { setNumber(e.target.value); initialState("tel") }} />
                <p className="alert alert-tel none">This field is required</p>
                <div className="personal-btn btns"><submit className="submit btn" onClick={(e) => { nextComponent(e) }}>Next step</submit></div>
            </form>
        </main>
    )
}
export default Personal;