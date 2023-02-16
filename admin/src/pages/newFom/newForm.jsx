import "./newForm.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const New = ({  }) => {
    const [requests,setRequests] = useState([])
    console.log(requests);
    useEffect(() => {
        axios.get("/form").then((resp)=>{
            setRequests(resp.data)            
        })
    }, [])

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
            {        
            requests.map((request)=>{
                return (
                    <div>
                    <p>{request.aadharNumber}</p>
                    <img src={request.image}></img>
                    <p>{request.panNumber}</p>
                    </div>
                )
            })            
            }
        </div>        
      </div>
    </div>
  );
};

export default New;
