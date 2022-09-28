import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../styles/form.css";
import env from "react-dotenv";
function Form() {
  const [input, setInput] = useState({
    _id: "",
    StudentName: "",
    Age: "",
    School: "",
    Class: "",
    MotherName: "",
    FatherName: "",
    MobileNumber: "",
    EmailId: "",
    HomeAddress: "",
    State: "",
    City: "",
    Pincode: "",
    PoliceStation: "",
    Country: "",
    ParentNumber: "",
    SchoolContact: "",
    BloodGroup: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  async function handleClick(e) {
    e.preventDefault();
    const data = {
      _id: input._id,
      StudentName: input.StudentName,
      Age: input.Age,
      School: input.School,
      Class: input.Class,
      MotherName: input.MotherName,
      FatherName: input.FatherName,
      MobileNumber: input.MobileNumber,
      WhatsappNumber: input.WhatsappNumber,
      EmailId: input.EmailId,
      HomeAddress: input.HomeAddress,
      State: input.State,
      City: input.City,
      Pincode: input.Pincode,
      PoliceStation: input.PoliceStation,
      Country: input.Country,
      ParentNumber: input.ParentNumber,
      SchoolContact: input.SchoolContact,
      BloodGroup: input.BloodGroup,
    };
    console.log(data);
    Axios.post(
      `${process.env.API_URL}/api/v1/newUserData`,
      data
    )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="container">
        <div className="title">Registration Form</div>
        <form>
          <div className="user__details">
            <div className="input__box">
              <span className="details">RollNumber</span>
              <input
                type="text"
                placeholder="E.g: 2010991907"
                name="_id"
                value={input._id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Student Name</span>
              <input
                type="text"
                placeholder="E.g: Manish Kumar"
                name="StudentName"
                value={input.StudentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Age</span>
              <input
                type="number"
                name="Age"
                placeholder="Enter Your Age"
                onChange={handleChange}
                value={input.Age}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">School Name</span>
              <input
                type="text"
                name="School"
                placeholder="Enter School Name"
                onChange={handleChange}
                value={input.School}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Class</span>
              <input
                type="number"
                name="Class"
                placeholder="Enter Your Class"
                onChange={handleChange}
                value={input.Class}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Mother Name</span>
              <input
                type="text"
                name="MotherName"
                placeholder="Enter Your Mother Name"
                onChange={handleChange}
                value={input.MotherName}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Father Name</span>
              <input
                type="text"
                name="FatherName"
                placeholder="Enter Your Father Name"
                onChange={handleChange}
                value={input.FatherName}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Mobile Number</span>
              <input
                type="text"
                name="MobileNumber"
                placeholder="Enter Your Mobile Number"
                onChange={handleChange}
                value={input.MobileNumber}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Email Id</span>
              <input
                type="email"
                name="EmailId"
                placeholder="Enter Your Email Id"
                onChange={handleChange}
                value={input.EmailId}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Home Address</span>
              <input
                type="text"
                name="HomeAddress"
                placeholder="Enter Your Home Address"
                onChange={handleChange}
                value={input.HomeAddress}
                required
              />
            </div>

            <div className="input__box">
              <span className="details">State</span>
              <input
                type="text"
                name="State"
                placeholder="Enter Your State"
                onChange={handleChange}
                value={input.State}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">City</span>
              <input
                type="text"
                name="City"
                placeholder="Enter Your City"
                onChange={handleChange}
                value={input.City}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Pincode </span>
              <input
                type="text"
                name="Pincode"
                placeholder="Enter Your Pincode"
                onChange={handleChange}
                value={input.Pincode}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Police Station </span>
              <input
                type="text"
                name="PoliceStation"
                placeholder="Enter Location Of PoliceStation"
                onChange={handleChange}
                value={input.PoliceStation}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Country </span>
              <input
                type="text"
                name="Country"
                placeholder="Enter Location Of PoliceStation"
                onChange={handleChange}
                value={input.Country}
                required
              />
            </div>

            <div className="input__box">
              <span className="details">Parent Phone Number </span>
              <input
                type="text"
                name="ParentNumber"
                placeholder="Enter Parent Phone Number"
                onChange={handleChange}
                value={input.ParentNumber}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">School Contact </span>
              <input
                type="text"
                name="SchoolContact"
                placeholder="Enter School Contact"
                onChange={handleChange}
                value={input.SchoolContact}
                required
              />
            </div>
            <div className="input__box">
              <span className="details">Blood Group </span>
              <input
                type="text"
                name="BloodGroup"
                placeholder="Enter Your Blood Group"
                onChange={handleChange}
                value={input.BloodGroup}
              />
            </div>
          </div>

          <div className="button">
            <input type="submit" onClick={handleClick} value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
