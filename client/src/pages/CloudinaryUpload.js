import React, { useEffect } from "react";
import styled from "styled-components";

function CloudinaryUpload({
  preset,
  handleUpload,
  buttonText
}) {

  // this function will generate an id to be used in
  // targeting the element to which we'll add a click event
  // listener to trigger the upload widget to appear.
  // We're generating the id based on the button text
  // so that we'll be able to have multiple buttons with
  // different upload presents visible on the same page.
  const generateId = () => {
    const ending = buttonText.split(' ').map(w => w.toLowerCase()).join('_')
    return `upload_widget_${ending}`
  }
  
  useEffect(() => {
    window.myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dj7uv0ras",
        uploadPreset: preset,
        prepareUploadParams: (cb, params) => {
          params = [].concat(params);  //params can be a single object or an array of objects
          Promise.all(params.map((body) => {
            return fetch("/api/uploads/prepare", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
            })
              .then(res => res.json())
          }))
            .then((results) =>
              cb(results.length === 1 ? results[0] : results)
            );
        }
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          handleUpload && handleUpload(result);
          window.myWidget.close();
        }
      }
    );
    document.getElementById(generateId()).addEventListener(
      "click",
      function () {
        window.myWidget.open();
      },
      false
    );
  }, [preset, handleUpload]);

  return (
    <A href="#" id={generateId()}>
      {buttonText}
    </A>
  );
}

export default CloudinaryUpload;

const A = styled.a`
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    margin: auto;
    width: 340px;
    color: black;
    background: white;
    border-radius: 20px;
    &:hover {
      color: #99FFFF;
      transition: all 0.4s ease 0s;
    }
`;
