"use client";
import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './home.css';

import { getHome } from '@/_actions/homeAction';
import { getVideo } from '@/_actions/videoAction';

const HomeData = () => {
  const [home, setHome] = useState([]);
  const [video, setVideo] = useState([]);
  const [errMsg, setErrMsg] = useState(null);

  const previewVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  useEffect(() => {
    const video = previewVideoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = 1;

      video.play().catch(error => {
        console.error("Preview autoplay failed:", error);
      });

      const stopVideo = () => {
        if (video.currentTime >= 2) {
          video.pause();
          video.removeEventListener("timeupdate", stopVideo);
        }
      };

      video.addEventListener("timeupdate", stopVideo);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);


  useEffect(() => {
    const video = backgroundVideoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.error("Background autoplay failed:", error);
      });
    }
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [homeRes, videoRes] = await Promise.all([
          getHome(),
          getVideo(),
        ]);

        if (homeRes.errMsg) setErrMsg(homeRes.errMsg);
        else setHome(homeRes.data);

        if (videoRes.errMsg) setErrMsg(videoRes.errMsg);
        else setVideo(videoRes.data);

      } catch (error) {
        console.error("Error fetching data:", error);
        setErrMsg("Data fetching error.");
      }
    };

    fetchData();
  }, []);

  const {
    titlesmall = "", titlesmall1 = "", titlesmall2 = "", titlesmall3 = "",
    titlelarge = "", text = ""
  } = home.length > 0 ? home[0] : {};

  const {
    videodispatch = "", videobackground = ""
  } = video.length > 0 ? video[0] : {};

  return (
    <section className="elements">
      <div className="video-background">
        <video
          ref={backgroundVideoRef}
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          height="100%"
          loading="lazy"
          id="myVideo"
        >
          {videobackground && (
            <source src={videobackground} type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>

        <div className="container-fluid-video elements shift-down" id="Home">
          <div className="row section mt-1">
            <div className="col-md-6">
              <div className="video-container">
                <video
                  ref={previewVideoRef}
                  className="video-responsive"
                  controls
                  playsInline
                  loop
                  muted
                  autoPlay
                  loading="lazy"
                  id="vid1"
                >
                  {videodispatch && (
                    <source src={videodispatch} type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="col-md-6 empower align-self-center elements">
              <h2>
                {titlesmall}<span className="thin"> {titlesmall1} </span>
                <br />
                <span>{titlesmall2}<span className="thin"> {titlesmall3} </span></span>
              </h2>
              <h2>{titlelarge}</h2>
              <p className="lead" style={{ minHeight: '80px' }}>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeData;
