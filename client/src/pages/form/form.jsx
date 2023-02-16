import { HiInformationCircle } from "react-icons/hi";
import React, {useRef, useState } from "react";
import Webcam from "react-webcam";
import './form.css';
import axios from "../../axios"
import {Link } from "react-router-dom"
import validator from 'validator'

const videoConstraints = {
  width: 440,
  facingMode: "environment"
};


const Form = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [aadharNumber, setaadharNumber] = React.useState("");
  const [panNumber, setpanNumber] = React.useState("");

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }
  const [formError,setFormError]=useState({
    zipError:'',
    aadharError:''
})
const {zipError,aadharError}=formError;
  const onSubmit = async e => {
    e.preventDefault();
    if (validator.isEmpty(panNumber)){
       // setFormError({...formError,zipError:"Please enter pin code."})
       setFormError(prevState=>{return{...prevState,zipError:"Please enter pin code."}} )
    }
    if (validator.isEmpty(aadharNumber)){
       setFormError(prevState=>{return{...prevState,aadharError:"Please enter aadhar number."}} )
    }
}
  
  const handleSubmit = async(event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("aadharNumber", aadharNumber);
    formData.append("panNumber", panNumber);
    
    try {
      const response = await axios({
        method: "post",
        url: "/form/formData",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch(error) {
      console.log(error)
    }
    
  }

  return (
    <>    
      <div class="form-group" onSubmit={e=>onSubmit(e)}>
		    	<label for="exampleInputAadharCard">Aadhar Card No.</label>
		    	<input type="text" value={aadharNumber} onChange={(e)=>{
            setaadharNumber(e.target.value) 
          }} class="form-control" id="exampleInputAadharCard" placeholder="Enter Your Aadhar Card No." name="exampleInputAadharCard"/>
          <div class="info">
          <HiInformationCircle/>
        <span class="extra-info">
        Please Enter Correct Aadhar Card Number
        </span>
        {/* <span>Hover me!</span> */}
         </div>
       
		  	</div>
        <div class="form-group1">
		    	<label for="exampleInputPanCard">Pan Card No.</label>
		    	<input type="text" value={panNumber} onChange={(e)=>{
            setpanNumber(e.target.value) 
          }} class="form-control" id="exampleInputPanCard" placeholder="Enter Your Pan Card No." name="exampleInputPanCard"/>
          <div class="info">
          <HiInformationCircle/>
        <span class="extra-info-pan">
        Please Enter Correct Pan Card Number
        </span>
        {/* <span>Hover me!</span> */}
         </div>
		  	</div>
      
    <div>
      <Webcam
        ref={webcamRef}
        audio={true}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        onUserMedia={onUserMedia}
      />
       {url && (
          <img src={url} alt="Screenshot" />
        )}


      <div class ="button">
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={() => setUrl(null)}>Refresh</button>
      {/* <button class="Save">Save</button> */}
      </div>
      <div class="form-group">
		    	<label for="exampleImageUpload" >Upload your Image!</label>
          <input type="file" multiple accept="image/*"  onChange={handleFileSelect} />
     </div>
     <button to="/" class="Save" onClick={handleSubmit} >Submit</button>
     
    </div>
    </>
  );
};

export default Form;