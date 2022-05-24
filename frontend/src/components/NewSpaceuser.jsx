import React, { useState } from "react";
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"

function NewSpaceuser() {

    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
    
      const [arr, setArr] = useState(inputArr);
    
      const addInput = () => {
        setArr(s => {
          const lastId = s[s.length - 1].id;
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };
    
      const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
      };

    return (
        <div>
            <button onClick={addInput}>+</button>
            {arr.map((item, i) => {
            return (
                <input
                className=""
                onChange={handleChange}
                value={item.value}
                id={i}
                type={item.type}
                size="40"
                />
            );
            })}

<div id="newusers"></div>

<button 
    className='outline-dashed outline-2 rounded-lg w-full p-3 mb-5'
    onClick={addInput}
>
    
    <span className='inline-block pr-4'><FaPlus /></span>
    Add User
</button>
      </div>

    
  )
}

export default NewSpaceuser