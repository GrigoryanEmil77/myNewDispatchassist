"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './truckstop.css';

export default function TruckStopClient({ truckstop = [] }) {
 const data = truckstop.length ? truckstop[0] : {};
  const {
    picture1 = "/Img3-1.jpg", picture2 = "/Img3-2.jpg", picture3 = "/Img3-3.jpg",
     picture4 = "/Img3-4.png", picture5 = "/Img3-5.jpg",
    picture6 = "/Img3-6.png", picture7 = "/Img3-7.png", picture8 = "/Img3-8.png",
     picture9 = "/Img3-9.png", picture10 = "/Img3-10.png"
  } = truckstop[0] || {};

  const images = [picture1, picture2, picture3, picture4, picture5,
                  picture6, picture7, picture8, picture9, picture10];

  return (
    <div className="container text-center mt-5">
      <div className="wrapper">
        {images.map((pic, idx) => (
          pic && (
            <div key={idx} className={`itemLeft item${idx + 1}`}>
              <img
                src={pic}
                alt={`Logo ${idx + 1}`}
                className="logo-img"
                width="95"
                height="75"
                loading="lazy"
                decoding="async"
              />
            </div>
          )
        ))}
      </div>
    </div>
  );
}
