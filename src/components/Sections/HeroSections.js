// import { useForm } from "./components/Tools/useForm";
import { useForm} from "../Tools/useForm";
import React from "react";
export default function HeroSections() {
  const [value, handleChange] = useForm({ email: "" });
  const inputRef=React.useRef();
  return (
    <>
      <div className=" container px-4 sm:px-6 lg:px-8 md:my-24 my-0">
        <div className="grid grid-cols-12">
          <div className="md:col-span-6 col-span-12">
            <div className="content--hero">
              <h1 className=" text-5xl font-extrabold gradient__text mb-10">
                Let’s Build Something amazing with GPT-3 OpenAI
              </h1>
              <p className="color_3 text-lg mb-10">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              {/* <form> */}
                <ul>
                  <li>
                    <input
                      ref={inputRef}
                      type="email"
                      value={value.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="Your Email Address"
                      className="md:w-96 w-64 h-14 p-5 bg-color_6 text-color_7 border-0"
                    />
                  </li>
                  <li>
                    <button className=" bg-color_1 h-14 md:w-32 w-48 text-white font-bold" onClick={()=>{
                      inputRef.current.focus();
                    }}>
                      Get Started
                    </button>
                  </li>
                </ul>
                <ul className=" mt-10">
                  <li>
                    <img src="./images/Group.png" alt="" className=" w-56" />
                  </li>
                  <li>
                    <span className=" text-white ">
                      1,600 people requested access a visit in last 24 hours
                    </span>
                  </li>
                </ul>
              {/* </form> */}
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:order-last order-first">
            <div className="hero--img md:-mt-24 mt-0">
              <img src="./images/HeaderIllustration.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
