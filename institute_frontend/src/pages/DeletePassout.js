import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HomeIcon from '@mui/icons-material/Home';
const CreatePassout = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: ""
  });

  const { email } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({...inputValue,[name]: value,});
  };

  const handleError = (err) =>
    toast.error(err, {position: "bottom-left",autoClose: 3000,});
  const handleSuccess = (msg) =>
    toast.success(msg, {position: "bottom-right",autoClose: 3000,});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`https://cstopass-service.onrender.com/passoutDelete`,
        {...inputValue},{ withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {navigate("/admin-page");}, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: ""
    });
  };

  return (
    <div>
    <button className="home-icon" onClick={(e)=>{navigate("/")}}><HomeIcon /></button>
    <div className="form-container">
      <h2>Delete Passout Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <input type="email" name="email" value={email} placeholder="Enter Email" onChange={handleOnChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer autoClose={3000} pauseOnFocusLoss={false}/>
    </div>
    </div>
  );
};

export default CreatePassout;
