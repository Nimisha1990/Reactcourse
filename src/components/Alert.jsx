import React from 'react'

function Alert(props) {
 const capatilize = (word)=>{
   if (!word) return '';  {/* if word is null or undefined, return an empty string */}
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
 }
  return (
      props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/* syntax here props.alert && means if this condiition is true then only this div will be rendered otherwise it will not be rendered */}
        <strong>{capatilize(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert