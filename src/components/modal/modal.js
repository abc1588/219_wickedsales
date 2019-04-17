import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    render(){

        const {
            children,
            defaultAction,
            defaultActionText = 'Ok',
            isOpen,
            secondaryAction = null,
            secondaryActionText = 'Cancel'
        } = this.props;

        if(isOpen) {
            return (
                <div className="ws-modal">
                    <div className="ws-modal-content">
                        {children}

                        <div className="ws-modal-actions center">
                            <button className="btn btn-large purple darken-2" onClick={close}>{defaultActionText}</button>
                            {
                                secondaryAction
                                    ? <button onClick={secondaryAction} className="btn btn-large purple lighten-1 lime">{secondaryActionText}</button>
                                    : null
                            }
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}

export default Modal;