import React from 'react'

function Arraylist() {
    const array = ["Divya", "Rahul", "Radi"];
    const arraylists = array.map(function(array){
        return <li>{array}</li>
    }
    );
  return (
    <div>
      <ul>{arraylists}</ul>
    </div>
  )
}

export default Arraylist;