import React, { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import UploadImageContext from "../context/UploadImageContext";
import Button from "react-bootstrap/Button";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const { setImageUrl } = useContext(UploadImageContext);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "http://localhost:5000/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("resp", response);
      if (response.status === 200) {
        alert("Upload successful");
      } else {
        alert("Upload failed");
      }

      setImageUrl(response.data.imageURL);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      {" "}
      <input type="file" onChange={handleFileChange} />
      <Button variant="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  );
}

export default ImageUpload;
