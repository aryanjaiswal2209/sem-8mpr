import { HiInformationCircle } from "react-icons/hi";
import React, {useRef } from "react";
import Webcam from "react-webcam";
import './form.css';

const videoConstraints = {
  width: 440,
  facingMode: "environment"
};


const Form = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  

  return (
    <>    
      <div class="form-group">
		    	<label for="exampleInputAadharCard">Aadhar Card No.</label>
		    	<input type="text" class="form-control" id="exampleInputAadharCard" placeholder="Enter Your Aadhar Card No." name="exampleInputAadharCard"/>
          <div class="info">
          <HiInformationCircle/>
        <span class="extra-info">
        A little column extra info. Aaand just a little bit more
        </span>
        {/* <span>Hover me!</span> */}
         </div>
       
		  	</div>
        <div class="form-group1">
		    	<label for="exampleInputPanCard">Pan Card No.</label>
		    	<input type="text" class="form-control" id="exampleInputPanCard" placeholder="Enter Your Pan Card No." name="exampleInputPanCard"/>
          <div class="info">
          <HiInformationCircle/>
        <span class="extra-info-pan">
      Something additional
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
      <button class="Save">Save</button>
      </div>
      <div class="form-group">
		    	<label for="exampleImageUpload">Upload your Image!</label>
          <input type="file" multiple accept="image/*"  />
     </div>
    </div>
    </>
  );
};

export default Form;