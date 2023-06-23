import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
// import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
const UserPage=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    // const [queryType,setQueryType]=useState("");
    const [searchValue,setSearchValue]=useState("");
    const [toDisplay,setToDisplay]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    useEffect(()=>{
        const getData=async ()=>{
            try{
                const res=await axios.get("http://localhost:4000/fetchData");
                setData(res.data);
                setToDisplay(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getData();
    },[]);
    useEffect(()=>{
        const filterResult=data.filter((item)=>{
            const {college,company}=item;
            if(searchValue==="")return true;
            if(college.toLowerCase().includes(searchValue.toLowerCase()))return true;
            if(company.toLowerCase().includes(searchValue.toLowerCase()))return true;
            return false;
        });
        setToDisplay(filterResult);
    },[searchValue,data]);

    return (
    <div>
            <form onSubmit={handleSubmit}>
            
                <div className='search-container'> 
                    {/* <select value={queryType} onChange={(e)=>setQueryType(e.target.value)} >
                        <option value="company">Company</option>
                        <option value="college">College</option>
                    </select> */}
                    <input name="search" value={searchValue} placeholder='Search by college or company...' className='search-box' onChange={(e)=>setSearchValue(e.target.value)}/>
                    <button className="home-icon" onClick={(e)=>{navigate("/")}}><HomeIcon /></button>
                    {/* <button className='search-icon' type='submit'><SearchIcon /></button> */}
                </div>
            </form>
        <div className='users'>
            {
                toDisplay.map((item)=>(
                    <div className='card' key={item._id}>
                        <div className='name'>{item.name}</div>
                        <div className="grid-container">
                            <div className='card-icon phone-icon' ><PhoneIcon/></div> <div className="icon-value">{item.contact} </div>
                            <div className='card-icon mail-icon'><MailIcon/> </div> <div className="icon-value">{item.email}</div>
                            <div className='card-icon school-icon'><SchoolIcon/> </div> 
                            <div className="icon-value first">{item.college}</div>
                            <div className='card-icon'></div> <div className="icon-value second">{item.branch}</div>
                            <div className='card-icon'></div> <div className="icon-value third">{item.passing}</div>
                            <div className='card-icon company-icon'><BusinessIcon/></div> <div className="icon-value">{item.company}</div>
                            <div className='card-icon other-icon' ><InfoIcon/> </div> <div className="icon-value">{item.other}</div>
                        </div>
                    </div>
                ))
            }
            
        </div>
</div>
    );
}

export default UserPage;