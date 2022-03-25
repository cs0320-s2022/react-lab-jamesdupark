import React, { ChangeEvent } from 'react';

function TextBox(props: any) {
  const onChange: (ev: ChangeEvent<HTMLInputElement>) => void = (e) => {
    props.change(e.target.value);
  };
    return (
      <div>
        <label htmlFor={props.id}>{props.label}: </label>
        <input type="text" id={props.id} onChange={onChange}></input>
      </div>
    );
}

export default TextBox;