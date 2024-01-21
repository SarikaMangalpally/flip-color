import React from "react";
import { ReactDOM } from "react-dom";

export default function Box(props) {
    const styles = {
        backgroundColor: props.on? '#222222': 'transparent'
      }
    return (
        <div style={styles} className='box' onClick={props.handleClick}></div>
    )

}