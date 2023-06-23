import './App.css';
import React, { Fragment} from "react";
import {Routes,Route} from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import AdminAuth from './utils/AdminAuth';
import UserAuth from './utils/UserAuth';
import HomePage from './pages/HomePage';
import CreatePassout from './pages/CreatePassout';
import CreateStudent from './pages/CreateStudent';
import DeletePassout from './pages/DeletePassout';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
        <Fragment>
          <Routes>
            
            <Route path="/admin-login" element={<AdminLogin/>}/>
            <Route path="/user-login" element={<UserLogin/>}/>
            <Route exact path="/" element={<HomePage/>}/>
            {/* the below routes are protected using AdminAuth and UserAuth as components defined inside the util folder */}
            <Route exact path="/admin-page" element={<AdminAuth><AdminPage/></AdminAuth>}/>
            
            <Route path="/admin-page/create-student" element={<AdminAuth><CreateStudent/></AdminAuth>}/>
            {/* <AdminAuth> */}
            <Route path="/admin-page/passout-create" element={<AdminAuth><CreatePassout/></AdminAuth>}/>
            
            <Route path="/admin-page/passout-delete" element={<AdminAuth><DeletePassout/></AdminAuth>}/>
            
            <Route exact path="/user-page" element={<UserAuth><UserPage/></UserAuth> }/>
          </Routes>
        </Fragment>
    </div>
  );
}

export default App;
