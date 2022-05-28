import React from 'react';
import './popup.scss';

const Popup = ({active, setActive, children, onClick}) => {

    return (
        <div
            className={`popup ${active ? 'open' : ''}`}
            onClick={onClick}
        >
            <div
                className="popup-content"
                onClick={e => e.stopPropagation()}
            >
                <span
                    onClick={onClick}
                    className="popup-close"
                >
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Popup;

export const PopupHeader = ({children}) => {
    return (
        <div className="popup-header">
            {children}
        </div>
    );
};

export const PopupBody = ({children}) => {
    return (
        <div className="popup-body">
            {children}
        </div>
    );
};

export const PopupFooter = ({children}) => {
    return (
        <div className="popup-footer">
            {children}
        </div>
    );
};