/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from "react";
import ReactPageScroller from 'react-page-scroller';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const FirstComponent = () => {
    return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 h-screen">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                  This is a simple example of a Landing Page you can build
                  using Notus NextJS. It features multiple CSS components
                  based on the Tailwind CSS design system.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
const SecondComponent = () => {
    return (
        <div className="relative w-full pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 h-screen bg-purple-500">

        </div>
    )
}
const ThirdComponent = () => {
    return (
        <div className="relative w-full pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75 h-screen bg-blue-500">

        </div>
    )
}
const LastComponent = ({ height }) => {
    return (
        <div className="relative h-screen">
            <div style={{ height }} className="relative w-full flex content-center items-center justify-center bg-black">
            
            </div>
            <div className="absolute bottom-0 w-full">
                <Footer/>
            </div>
        </div>
    )
}

export default function Scroll(){
    return(
        <>
        <IndexNavbar />
            <ReactPageScroller containerHeight={"100vh"}>
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
                <LastComponent/>
            </ReactPageScroller>
        </>
    )
}