import React from "react";
import { } from "react-router-dom";
import uuid from 'react-uuid'
import './singleActionForm.css'

const SingleActionForm = (props) => {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", height: window.innerHeight - 30 }}>
            <div className="single_action_form_container">
                <label className="default_title">{props.title}</label>

                {props.description && <label className="default_text single_action_form_topic">{props.description}</label>}

                {props.descriptionList && props.descriptionList.map(desc => { return (<li key={uuid()} className="default_text single_action_form_topic">{desc}</li>) })}

                <div className="big_padding_on_top">
                    <button className="call_to_action" onClick={props.onClick} >{props.callToActionText}</button>
                </div>
            </div>
        </div >
    );
}

export default SingleActionForm;