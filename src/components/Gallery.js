import React from "react";
import "./gallery.css";

const images = [
  { imgname: "1.jpg" },
  { imgname: "2.jpg" },
  { imgname: "3.jpg" },
  { imgname: "4.jpg" },
  { imgname: "5.jpg" },
  { imgname: "6.jpg" },
  { imgname: "7.jpg" },
];

function Gallery() {
  return (
    <div className="main">
      <div className="gallery">
        <h1 className="heading">Photo Gallery</h1>
        {images.map((image) => (
          <div img-card>
            <img className="image" src={`/pictures/${image.imgname}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
