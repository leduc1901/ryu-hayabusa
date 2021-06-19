import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(20deg,rgba(222,184,33,.7),#76adb0 98%)",
      }}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div
        style={{
          background:
            "linear-gradient(20deg,#e7ab17 3%,#d3b72c 40%,#81af76 77%)",
          position: "relative",
          overflow: "hidden",
          width: "1311px",
          display: "flex",
          height: "818px",
        }}
      >
        <div class="menu-bar">
          <div class="menu-item menu-item-1" style={{ animationDelay: "0ms" }}>
            STORIES
          </div>
          <div
            class="menu-item menu-item-2"
            style={{ animationDelay: "200ms", marginTop: "43px" }}
          >
            SERVICE
          </div>
          <div
            class="menu-item menu-item-3"
            style={{ animationDelay: "400ms", marginTop: "50px" }}
          >
            SUPPORT
          </div>
        </div>
        <div class="toolbar">
          <div class="toolbar-line"></div>
          <div class="toolbar-line"></div>
        </div>
        <div class="scroll">
          <div class="scroll-item"></div>
        </div>
        <div class="float-text">
          <p>
            As the son of renowned ninja Joe Hayabusa,[note 1] Ryu Hayabusa
            (whose first and last names, respectively, translate literally to
            "dragon" and "peregrine falcon") is the wielder of the legendary
            Dragon Sword.[5] Although he appears as a normal human, he is
            actually a demon-human hybrid whose ancestors drew their blood from
            the same evil deities such as the Holy Vigoor Emperor, the first
            game's main antagonist. In the Dead or Alive series, Ryu has
            befriended fellow ninja Hayate, and joins forces with him along with
            Kasumi and Ayane, with whom he works to take down the corrupt
            tournament organizer Victor Donovan.
          </p>
        </div>
        <div class="car-image">
          <img src="https://i.ibb.co/L6n8NyF/23a106bcde9f07bac8d868e8e4eba5c6.png" />
        </div>
        <div class="camp-image">
          <img src="https://i.ibb.co/tckLGz1/house-PNG50.png" />
        </div>
        <div className="fking-scroll">
          <div class="section-one" style={{ height: "818px" }}>
            <div class="title-section">
              <div class="title1">
                <p>Electric</p>
              </div>
              <div class="title2">
                <p>Adventure</p>
              </div>
            </div>
            <div class="action">
              <div class="explore">
                <p class="explore-text">KEEP THE WORLD ADVENTUROUS FOREVER</p>
                <div class=" button">EXPLORE</div>
              </div>
              <div class="action-btn">
                <div class=" btn">
                  <i class="fa fa-home" style={{ fontSize: "20px" }}></i>
                </div>
                <div class=" btn">
                  <i class="fa fa-power-off" style={{ fontSize: "20px" }}></i>
                </div>
                <div class=" btn">
                  <i class="fa fa-codiepie" style={{ fontSize: "20px" }}></i>
                </div>
              </div>
              <div class="drawing">
                <img src="https://cdn.carbuzz.com/gallery-images/2021-mercedes-amg-g63-dashboard-carbuzz-410020.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="section-two">
          <div class="title">
            <div class="title-box">
              <p class="react-reveal"
                style="animation-fill-mode: both; animation-duration: 600ms; animation-delay: 0ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-745702567171635-1;">
                Explore the</p>
            </div>
            <div class="title-box">
              <p class="react-reveal"
                style="animation-fill-mode: both; animation-duration: 600ms; animation-delay: 200ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-745702567171635-1;">
                places you love</p>
            </div>
          </div>
        </div>
        <div class="section-three"></div> */}
      </div>
    </div>
  );
}
