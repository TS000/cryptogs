import React, { Component } from 'react';
import createClass from 'create-react-class';

export default createClass({
  render(){
    return (
      <div className={"messageBorder"} style={{zIndex:1000,position:'fixed',bottom:-5,right:10}}>
        <a target="_blank" href={"https://discord.gg/RhqxSj7"}>
        <img
          style={{cursor:"pointer"}}
          src="/discord.png" style={{maxWidth:20}}
        />
        </a>
      </div>
    )
  }
})
