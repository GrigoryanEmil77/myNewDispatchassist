"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './truckstop.css';

export default function TruckStopClient({ truckstop = [] }) {
  if (!truckstop.length) return null;

  const {
    picture1 = "", picture2 = "", picture3 = "", picture4 = "", picture5 = "",
    picture6 = "", picture7 = "", picture8 = "", picture9 = "", picture10 = ""
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
