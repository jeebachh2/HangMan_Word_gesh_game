import { useState } from "react";

function ArrayComponent() {
    const [arr, setArr] = useState([10, 11, 1, 3, 0, 9, -2, 6]);
     function sortArray() {
       const sortedArr = [...arr].sort((a, b) => a-b);
       setArr(sortedArr);
     }
     function insert() {
        const randomNumber = Math.floor(Math.random()* 100);
        const newArr = [...arr, randomNumber];
        setArr(newArr);
     }

     return (
      <div>
       <ul>
      {arr.map((item, index) => <li key={index}>{item}</li>)}
      {/**<li>1</li>, <li>2</li>, <li>3</li>*/}
    </ul>
    <button onClick={sortArray}>Sort array</button>
    <br></br>
    <button onClick={insert}>insert</button>
    
      </div>
    
     )
}

export default ArrayComponent;