import React from 'react';
const Scroll=(props)=>{
    return(
    <div style={{overflowY:'scroll' ,margin:'10px', height:'30em'}}>
       { props.children }
    </div>
)}
export default Scroll;