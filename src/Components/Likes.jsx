import React from 'react';
const Likes = ({ clickData }) => {
  console.log('Click data in Like Page', clickData);

  return (
    <div className="container">
      <h1>Like Page </h1>

      <div className="row">
        {/* {clickData.map((ele, id) => {
          console.log(ele);
          return (
            <div className="col-sm-4">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={ele.image} alt="Avatar" className="card-img" />
                  </div>
                  <div class="flip-card-back">
                    <p className="card-text">ID : {ele.id}</p>
                    <h5 className="card-title">Name : {ele.name}</h5>
                    <p className="card-text">Species : {ele.species}</p>
                    <p className="card-text">Gender : {ele.gender}</p>
                  </div>
                </div>
              </div>
              <div className="offset-2">
                <button class="button" onClick={() => onLikeHandle(ele)}>
                  <span>Like </span>
                </button>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default Likes;
