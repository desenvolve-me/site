import React from "react";
import { } from "react-router-dom";
import uuid from 'react-uuid'
import TopicListItem from './topicListItem'

const TopicList = (props) => {

    var topicListContainerDynamicStyle = {}

    var isMobile = window.innerWidth < 992

    if (!isMobile) {
        topicListContainerDynamicStyle = {
            ...topicListContainerDynamicStyle,
            height: window.innerHeight
        }
    }

    return (
        <div className="topicListContainer" style={topicListContainerDynamicStyle}>
            <div style={{ textAlign: "center" }}>
                <label className="title2" >{props.title}</label>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {props.topics.map(item => {
                    return <TopicListItem key={uuid()} itemTitle={item.title} subItens={item.subItens} />
                })}
            </div>
        </div>
    );
}



export default TopicList;