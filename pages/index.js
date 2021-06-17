import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "40px",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        zIndex: "800",
      }}
    >
      <div className="left-bar" style={{ color: "white" }}>
        <div className={`left-bar-item`}>The</div>
        <div className={`left-bar-item`}>Master</div>
        <div className={`left-bar-item`}>Ninja</div>
      </div>
      <div className="right-bar">Ninja Gaiden</div>
      <div
        className="center-image"
        style={{ height: "400px", margin: "180px auto", width: "640px" }}
      >
        <img src="/91698.jpg" style={{ maxHeight: "100%", maxWidth: "100%" }} />
      </div>
      <div className="main-scroller" style={{ top: "0px" }}>
        <div
          style={{ height: "100vh", marginTop: "20px", position: "relative" }}
        >
          <div id="headline">
            <p className="first-headline zzz">Ninja</p>
            <p className="first-headline-2">Gaiden</p>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "20px",
              display: "flex",
              flexDirection: "row",
              left: "20%",
            }}
          >
            <div className="bottom-text">Ryu Hayabusa</div>
            <div className="bottom-text" style={{ marginLeft: "80px" }}>
              The Dragon Ninja
            </div>
            <img
              src="/weapons-japan-sword-katana-wallpaper-preview.jpg"
              style={{ width: "120px", maxHeight: "100%", marginLeft: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
