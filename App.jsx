import React, {useState} from 'react';
import './App.scss';

import Button from "./components/button";
import Popup from "./components/popup";
import {PopupBody, PopupFooter, PopupHeader} from "./components/popup/Popup";

import popupData from './popupData.json';

function App() {

    const [popupActive, setPopupActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
        setPopupActive(true);
        document.body.classList.add('popup-open');
    };

    const closePopup = () => {
        setPopupActive(false);
        document.body.classList.remove('popup-open');
        setIsOpen(false);
    };

    return (
        <>
            <div className="App">
                <Button
                    classNmae='btn'
                    children="Popup window"
                    onClick={openPopup}
                />
            </div>
            {isOpen &&
            <Popup
                active={popupActive}
                setActive={setPopupActive}
                onClick={closePopup}
            >
                <PopupHeader>
                    <h2>Popup Header</h2>
                </PopupHeader>
                <PopupBody children={popupData.main.message1}/>
                <PopupFooter>
                    <Button
                        children="Close"
                        onClick={closePopup}
                    />
                </PopupFooter>
            </Popup>
            }
        </>
    );
}

export default App;
