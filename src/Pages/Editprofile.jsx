
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProfileUrl } from '../Redux/Slices/profileSlice';
import { useNavigate } from 'react-router-dom';
import {profileimageService} from '../services/editProfileService';

function UploadProfileImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [localProfileUrl, setLocalProfileUrl] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalProfileUrl(reader.result);
       
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const token = localStorage.getItem('token');
    const uploadData = localProfileUrl;

      const response = await profileimageService(uploadData);
      if(!response.error){
      dispatch(setProfileUrl(response.data.user.image));
      navigate("/profile")
      }

  };

  return (
    <div className='mt-40'>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {localProfileUrl && <img src={localProfileUrl} alt="Profile Preview" />}
    </div>
  );
}

export default UploadProfileImage;
