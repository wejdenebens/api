

import React, { useState, useEffect } from "react";
import axios from "axios";


const [data, setData] = useState({ listOfUSer : [] });

const UserList = () =>{
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users?query=redux"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.listOfUSer.map(item => (
        <li key={item.id}>
          <a href={item.name}>{item.username}</a>
        </li>
      ))}
    </ul>
  );

}


export default UserList
