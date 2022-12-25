import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addList, componentID, previousID } from "../../redux/actions/Actions";
import './addons.css'

const AddOns = () => {
    const globalID = useSelector(state => state.increaseID)
    const dispatch = useDispatch();
    const [items, setItems] = useState([{
        'item': 'Online service',
        'price': 1
    }, {
        'id': 2,
        'item': 'Larger storage'
        , 'price': 2
    }]);

    useEffect(() => {
        const component = document.getElementsByClassName("component");
        for (let i = 0; i < component.length; i++) {
            component[i].classList.add('none');
        }
        document.getElementsByClassName(`comp${globalID}`)[0].classList.remove('none');
    }, [globalID])
    const nextComponent = () => {
        dispatch(componentID(globalID))
        dispatch(addList(items))
    }
    const previousComponent = (e) => {
        dispatch(previousID(globalID));
        e.preventDefault();
    }
    useEffect(() => {
        document.getElementById("1").setAttribute("checked", "checked");
        document.getElementById("2").setAttribute("checked", "checked");
    }, [])
    const pickItem = (second_cls, id, itm, price) => {

        if (document.getElementsByClassName(second_cls)[0].classList.contains("picked")) {
            document.getElementsByClassName(second_cls)[0].classList.remove("picked");
            document.getElementById(id).removeAttribute("checked");
            removelistItems(itm, price);
        }

        else {
            document.getElementsByClassName(second_cls)[0].classList.add("picked");
            document.getElementById(id).setAttribute("checked", "checked")
            addlistItems(itm, price);
        }

    }
    const addlistItems = (itm, price) => {
        var add = true;
        items.forEach((e) => {
            if (e.item === itm && e.price === price) add = false;
        })
        const item = {
            'item': itm,
            'price': price
        }
        if (add) {
            setItems(it => [...it, item]);
        }
    }
    const removelistItems = (itm, price) => {
        const arr = items.filter((e) => {
            if (itm !== e.item) return e;
        })
        setItems(arr);
    }
    return (
        <main>
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
            <form>
                <div className="pick one picked" onClick={() => pickItem("one", 1, "Online service", 1)}>
                    <input type="checkbox" id="1" />
                    <div className="description">
                        <h4>Online service</h4>
                        <p>Access to multiplayer games</p>
                    </div>
                    <span className="price">+$1/yr</span>
                </div>
                <div className="pick two picked" onClick={() => pickItem("two", 2, "Larger storage", 2)}>
                    <input type="checkbox" id="2" />
                    <div className="description">
                        <h4>Larger storage</h4>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <span className="price">+$2/yr</span>
                </div>
                <div className="pick three" onClick={() => pickItem("three", 3, "Customizable Profile", 2)}>
                    <input type="checkbox" id="3" />
                    <div className="description">
                        <h4>Customizable Profile</h4>
                        <p>Custom theme on your profile</p>
                    </div>
                    <span className="price">+$2/yr</span>
                </div>
                <div className="btns">
                    <submit className="back btn" onClick={(e) => previousComponent(e)}>Go back</submit>
                    <submit className="submit btn" onClick={(e) => { nextComponent(); e.preventDefault(); }}>Next step</submit>
                </div>
            </form>
        </main>
    )
}
export default AddOns;