import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostsComponent from './PostsComponent';
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';
import { CurrentPepole } from '../Redux/Action';
import TextField from '@mui/material/TextField';

export const HomePage = () => {
  const [filter, setFilter] = useState('');
  let Dispatch=useDispatch();

  const pepolData = useSelector((myStore) => myStore.PepolData);
  const NavToPosts=useNavigate()

  const filteredData = pepolData.filter(
    (item) =>
      item.name?.toLowerCase().includes(filter.toLowerCase()) ||
      item.email?.toLowerCase().includes(filter.toLowerCase())
  );
  const handlePersonClick = (person) => {
    Dispatch(CurrentPepole(person))

    NavToPosts(`/PostsComponent`)

  };
  return (
    <>

    
      <div>
        <input style={{marginTop:"110px" , width:"50%"}}
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Filter by name or email"
        />
        <table style={{ borderCollapse: 'collapse', width: '80%', marginTop:"120px",marginLeft:"150px" }}>
          <tr style={{ borderBottom: '5px solid rgb(101, 86, 29)' }}>
            <th>name</th>
            <th>Email</th>
            <th>company name</th>
          </tr>
          {filteredData.map((item, index) => (
            <tr style={{ borderBottom: '1px solid rgb(101, 86, 29)' }} key={index} onClick={() => handlePersonClick(item)}>
              <td >{item.name}</td>
              <td >{item.email}</td>
              <td>{item.company.name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div className="footer1"></div> 

    </>
  );
};