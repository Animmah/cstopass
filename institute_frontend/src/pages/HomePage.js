import {useNavigate} from 'react-router-dom';

const HomePage=()=>{
    const Navigate=useNavigate();
    const onAdminClick=()=>{
        Navigate('/admin-page');
    }
    const onStudentClick=()=>{
        Navigate('/user-page');
    }
    return (
        <div className='home-page'>
            <button className="admin-button" onClick={onAdminClick}>Admin Page</button>
            <button className="user-button" onClick={onStudentClick}>Student Page</button>
        </div>
    );
}
export default HomePage;