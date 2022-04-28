import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Likes from '../Components/Likes';
const Home = () => {
  const [data, setData] = useState([]);
  const [clickData, setClickData] = useState('');
  const onLikeHandle = (e) => {
    setClickData(e);
    // console.log('clickData in Home Page', clickData);
  };
  const getData = () => {
    axios
      .get('https://rickandmortyapi.com/api/character', data)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Home Page </h1>

      <div className="row">
        {data.map((ele) => {
          return (
            <div className="col-sm-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={ele.image} alt="Avatar" className="card-img" />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">ID : {ele.id}</p>
                    <h5 className="card-title">Name : {ele.name}</h5>
                    <p className="card-text">Species : {ele.species}</p>
                    <p className="card-text">Gender : {ele.gender}</p>
                  </div>
                </div>
              </div>
              <div className="offset-2">
                <button className="button" onClick={() => onLikeHandle(ele)}>
                  <span>Like </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Likes clickData={clickData} />
    </div>
  );
};
export default Home;
