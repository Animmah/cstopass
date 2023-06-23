import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
const AdminPage=()=>{
    const Navigate=useNavigate();
    const handleStudent=()=>{
        Navigate("/admin-page/create-student");
    }
    const handlePassout=()=>{
        Navigate("/admin-page/passout-create");
    }
    const handleDelete=()=>{
        Navigate("/admin-page/passout-delete");
    }
    return (
        <div>
        <button className="home-icon" onClick={(e)=>{Navigate("/")}}><HomeIcon /></button>
        <div className="admin-page">
            <div className="create">
            <h1>Create </h1>
            <button onClick={handleStudent}>Student Account</button>
            <button onClick={handlePassout}>Passout student details</button>
            </div>
            
            <h1>Delete</h1>
            <button onClick={handleDelete}>Passout student details</button>
        </div>
        </div>
    )
};

export default AdminPage;