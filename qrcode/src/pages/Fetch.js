import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../styles/form.css";
console.log(process.env.REACT_APP_WEATHER_API_KEY);
function Fetch() {
  const [RollNumber, setRollNumber] = useState("2010991907");
  const [comments, setComments] = useState([]);

  const changeRollNumber = async () => {
    console.log(`${process.env.REACT_APP_WEATHER_API_KEY}/api/v1/alldata/${RollNumber}`);
    const response = await Axios(
      `${process.env.REACT_APP_WEATHER_API_KEY}/api/v1/alldata/${RollNumber}`
    );
    setComments([response.data]);
  };

  return (
    <div>
      <div class="input_container">
        <span> ENTER ROLL NUMBER TO FETCH</span>
        <div class="input_box">
          <input
            type="text"
            value={RollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          ></input>
        </div>
        <div class="submit_box">
          <button onClick={changeRollNumber}>Click</button>
        </div>
      </div>
      {comments.map((comment, index) => (
        <div>
          <div className="container">
            <div className="title">User Data Of Student</div>
            <form>
              <div className="user__details">
                <div className="input__box">
                  <span className="details">
                    {comment.data.error}
                    <b>RollNumber :</b> {comment.data._id}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>Student Name :</b> {comment.data.StudentName}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    {" "}
                    <b>Age :</b> {comment.data.Age}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>School Name :</b> {comment.data.School}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    {" "}
                    <b>Class :</b> {comment.data.Class}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>Mother Name:</b> {comment.data.MotherName}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> Father Name</b> {comment.data.FatherName}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> Mobile Number :</b> {comment.data.MobileNumber}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> Email Id :</b> {comment.data.EmailId}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>Home Address :</b> {comment.data.HomeAddress}
                  </span>
                </div>

                <div className="input__box">
                  <span className="details">
                    <b>State :</b> {comment.data.State}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>City :</b> {comment.data.City}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> Pincode: </b> {comment.data.Pincode}{" "}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> Police Station :</b> {comment.data.PoliceStation}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>Country :</b> {comment.data.Country}
                  </span>
                </div>

                <div className="input__box">
                  <span className="details">
                    <b> Parent Phone Number :</b> {comment.data.ParentNumber}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b> School Contact :</b> {comment.data.SchoolContact}{" "}
                  </span>
                </div>
                <div className="input__box">
                  <span className="details">
                    <b>Blood Group :</b> {comment.data.BloodGroup}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
