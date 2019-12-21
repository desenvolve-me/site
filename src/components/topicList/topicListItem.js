import React from "react";
import { } from "react-router-dom";
import uuid from 'react-uuid'
import './topicList.css'

const TopicListItem = (props) => {

    return (
        <div className="topicListItemcontainer">
            <label className="title3" style={{ paddingBottom: 30 }}>{props.itemTitle}</label>
            {
                props.subItens.map(subItem => {
                    return (<li key={uuid()} style={{ paddingTop: 15 }}><label className="">{subItem}</label> <br /></li>)
                })
            }
        </div >
    );
}

export default TopicListItem;