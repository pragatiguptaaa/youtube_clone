import React from 'react';
import Button from "./Button";

function ButtonList() {
  return (
    <div className ="flex flex-wrap">
        <Button name ="All"/>
        <Button name ="Live"></Button>
        <Button name="Trending"></Button>
       <Button name ="Sports"></Button>
       <Button name ="Music"></Button>
       <Button name ="Comedy"></Button>
       <Button name ="Entertainment"></Button>
       <Button name ="Education"></Button>
       <Button name ="News"></Button>
       <Button name ="Workout"></Button>
       <Button name ="Diet"></Button>
       <Button name ="Health"></Button>
    </div>
      

  );
}

export default ButtonList