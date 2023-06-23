import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HomeIcon from '@mui/icons-material/Home';
const CreatePassout = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    contact: "",
    college:"",
    branch:"",
    passing:"",
    company:"",
    other:""
  });

  const { email, name, contact, college, branch, passing, company, other } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({...inputValue,[name]: value,});
    // console.log(value);
  };

  const handleError = (err) =>
    toast.error(err, {position: "bottom-left",autoClose: 3000,});
  const handleSuccess = (msg) =>
    toast.success(msg, {position: "bottom-right",autoClose: 3000,});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[0]);
    try {
      const { data } = await axios.post(`https://cstopass-service.onrender.com/passoutCreate`,
        {...inputValue},{ withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {navigate("/admin-page");}, 1000);
      } else {

        handleError(message);
        setTimeout(()=>{navigate("/admin-login")},1000);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      name: "",
      contact: "",
      college:"",
      branch:"",
      passing:"",
      company:"",
      other:""
    });
  };

  return (
    <div>
    <button className="home-icon" onClick={(e)=>{navigate("/")}}><HomeIcon /></button>
    <div className="form-container">
      <h2>Passout Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <input type="email" name="email" value={email} placeholder="Email" onChange={handleOnChange} required/>
        </div>
        <div className="form-element">
          <input type="text" name="name" value={name} placeholder="Name of student" onChange={handleOnChange} required/>
        </div>
        <div className="form-element">
          <input type="text" name="contact" value={contact} placeholder="Contact number" onChange={handleOnChange} required/>
        </div>
        <div className="form-element">
          <input type="text" name="college" value={college} placeholder="College Name" onChange={handleOnChange} />
        </div>        
        <div className="form-element">
          <input type="text" name="branch" value={branch} placeholder="Branch " onChange={handleOnChange}/>
        </div>
        <div className="form-element">
          <input type="text" name="passing" value={passing} placeholder="Passing year" onChange={handleOnChange}/>
        </div>
        <div className="form-element">
          <input type="text" name="company" value={company} placeholder="Current Company" onChange={handleOnChange}/>
        </div>
        <div className="form-element">
          <textarea type="text" name="other" value={other} placeholder="Other Details" onChange={handleOnChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false}/>
    </div>
    </div>
  );
};

export default CreatePassout;
