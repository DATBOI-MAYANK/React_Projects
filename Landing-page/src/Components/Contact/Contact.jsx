import React from "react";
import Header from "../Header/Header";

function Contact() {
  return (
    <>
      <Header />

      <div className="flex-col  text-center">
        <h1 className="font-black text-3xl">Contact Us</h1>
        <p>Any question or remarks? Just write us a message!</p>
      </div>
      <div className="border-2 flex border-white w-5/6 h-[32rem] overflow-hidden mt-2 ml-24">
        <div className=" text-center rounded-xl h-[33rem] w-1/2 text-xl  text-white bg-black">
          <h2 className="font-black text-4xl p-1">Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <div className="object-contain w-3/4">
            {" "}
            <img src="/images/contactUs.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-1/4 ">
          <label className="m-4">
            {" "}
            First Name
            <input
              className="outline-dashed outline-2 outline-slate-800 rounded-lg"
              type="text"
            />
          </label>
          <label className="m-4 mr-8">
            {" "}
            E-mail
            <input
              className="outline-dashed outline-2 outline-slate-800 rounded-lg"
              type="email"
              name=""
              id=""
            />
          </label>
        </div>
        <div className="flex flex-col w-1/4 ">
          <label className="m-4">
            {" "}
            Last Name
            <input
              className="outline-dashed outline-2 outline-slate-800 rounded-lg"
              type="text"
            />
          </label>
          <label className="m-4">
            {" "}
            Phone Number
            <input
              className="outline-dashed outline-2 outline-slate-800 rounded-lg"
              type="number"
            />
          </label>
          <button className="mt-10 text-white bg-black rounded-xl p-4">Send Message</button>
        </div>
        
      </div>
    </>
  );
}

export default Contact;
