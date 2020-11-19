import React from "react";


const NewestEp = (props) => {
const {queriedEps} = props

console.log()
  return (
    <>
    <h2>{queriedEps.fields.title}</h2>
    
    </>
     
  );
};

export default NewestEp;
