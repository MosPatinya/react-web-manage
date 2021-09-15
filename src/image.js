import React, { useState } from 'react';
import { storage } from "./config";
import './image.css'

function Image() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }
  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/picture/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref.getDownloadURL().then((url) => {
        setFile(null);
        setURL(url);
        alert(`อัพเดตข้อมูลสำเร็จ${url}`)
      });
    });
  }


  return (
    <div className="image">
      <center>
        <form onSubmit={handleUpload}>
          <img src={url} alt="" />
          <input type="file" onChange={handleChange} />
          <button disabled={!file}>upload to firebase</button>
        </form>
      </center>
    </div>
  );
}

export default Image;