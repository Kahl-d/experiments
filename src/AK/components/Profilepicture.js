import React, { useState } from 'react';
import '../css/Profilepicture.css';

function ProfilePicture() {
  const [image,] = useState(null);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="profile-picture">
      <div className="image-container">
        <img
          src={image || require('./Profilepicture.jpg')} // Use require() for the fallback image
          alt="Anish Khadka"
          className="profile-image"
        />
        {/* <label htmlFor="profile-picture-upload" className="upload-button">
          {image ? 'Change Photo' : 'Change Photo'}
        </label>
        <input
          type="file"
          id="profile-picture-upload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        /> */}
      </div>
    </div>
  );
}

export default ProfilePicture;
