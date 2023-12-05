import React from "react";
import Header from "./header";
import fo1 from "../assets/img/footer/1.svg";
import fo2 from "../assets/img/footer/2-1.svg";
import fo21 from "../assets/img/footer/2.svg";
import fo3 from "../assets/img/footer/3.svg";
import fb from "../assets/img/fb.svg";
import insta from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import logo from "../assets/img/logoo.svg";
import logo1 from "../assets/img/flh.svg";
import w from "../assets/img/w.jpeg";
import Crousell from "./crousel 2";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Contact = () => {
  const [formData, setFormData] = React.useReducer(formReducer, {});
  const [submit, setSubmit] = React.useState(false);
  const download = () => {
    fetch("Florian-Hurel.pdf").then((e) => {
      const url = e.url;
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        "Florian-Hurel.pdf" // File name with type
      );
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  };

  const handelSubmit = () => {
    fetch("https://formsubmit.co/ajax/zarir@latelierartistmanagement.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.first + " " + formData.last,
        message: formData.message,
        email: formData.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmit(true);
        console.log(data);
      })
      .catch((error) => console.log(error));
    console.log(formData);
  };
  return (
    <>
      <div
        className="tw-w-full"
        style={{
          background: "linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)",
        }}
      >
        <Header></Header>
        <Crousell />
        <div>
          <div class="tw-flex tw-flex-col-reverse min-[900px]:tw-flex-row tw-mx-[10px]  min-[900px]:tw-mx-[200px] min-[900px]:tw-my-[150px] tw-my-[50px]">
            <div
              className="min-[900px]:tw-w-1/2  tw-h-auto "
              style={{ background: "#fff", border: "1px solid #000" }}
            >
              <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-m-[20px]">
                <div className="">
                  <label
                    htmlFor="first-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={setFormData}
                    className="tw-mt-2 tw-block tw-w-full tw-rounded-md  tw-shadow tw-appearance-none tw-border tw-rounded tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  />
                </div>
                <div className="">
                  {" "}
                  <label
                    htmlFor="last-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last"
                    id="last-name"
                    onChange={setFormData}
                    autoComplete="family-name"
                    className="tw-mt-2 tw-block tw-w-full tw-rounded-md  tw-shadow tw-appearance-none tw-border tw-rounded tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  />
                </div>
              </div>
              <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                <div className="">
                  <label
                    htmlFor="Email"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="Email"
                    onChange={setFormData}
                    autoComplete="given-name"
                    className="tw-mt-2 tw-block tw-w-full tw-rounded-md  tw-shadow tw-appearance-none tw-border tw-rounded tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  />
                </div>
              </div>
              {/* <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                                <div className="">
                                    <label htmlFor="Message" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                        Message
                                    </label>
                                    <input
                                        type="text"
                                        name="Message"
                                        id="Message"
                                        autoComplete="given-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md  tw-shadow tw-appearance-none tw-border tw-rounded tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                                    />
                                </div>
                            </div> */}
              <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                <div className="">
                  <label
                    htmlFor="Message"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900"
                  >
                    Message
                  </label>
                  <textarea
                    rows="5"
                    type="text"
                    name="message"
                    id="Message"
                    onChange={setFormData}
                    autoComplete="given-name"
                    className="tw-mt-2 tw-block tw-w-full tw-rounded-md  tw-shadow tw-appearance-none tw-border tw-rounded tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                  />
                </div>
              </div>
              <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                {!submit ? (
                  <button
                    onClick={handelSubmit}
                    disabled={
                      formData.first && formData.last && formData.email
                        ? false
                        : true
                    }
                    class="tw-bg-black disabled:tw-bg-[#585858] disabled:tw-text-white disabled:tw-cursor-not-allowed hover:tw-bg-white tw-text-white hover:tw-text-black tw-font-bold tw-py-2 tw-px-4 tw-rounded"
                  >
                    Send Message
                  </button>
                ) : (
                  <button class="tw-bg-[#fff] tw-text-black tw-font-bold tw-py-2 tw-px-4 tw-rounded">
                    Thanks, We will reach you shortly.
                  </button>
                )}
              </div>
            </div>
            <div className="min-[900px]:tw-w-1/2 tw-mx-[30px] tw-my-auto tw-mb-[20px] min-[900px]:tw-mb-auto">
              <div class="tw-flex tw-flex-col">
                {/* <div className='mx-auto tw-font-sans tw-font-semibold tw-text-[12px] tw=leading-[16px] tw-text-[#E9145A]'>Got a Question?</div> */}
                <div className="mx-auto tw-font-sans tw-font-bold tw-text-[36px] tw=leading-[49px] tw-text-[#fff] ">
                  Contact Florian
                </div>
                <div
                  className="mx-auto tw-font-sans tw-font-semibold tw-text-[16px] tw=leading-[22px] tw-text-[#fff] "
                  style={{ textAlign: "center" }}
                >
                  We’re here to help and answer any question you might have. We
                  look forward to hearing from you.
                </div>
                <div
                  className="mx-auto tw-font-sans tw-font-semibold tw-text-[16px] tw-mt-[30px] tw=leading-[22px] tw-text-[#fff] "
                  style={{ textAlign: "center" }}
                >
                  <button
                    class="tw-bg-black hover:tw-bg-white tw-text-white hover:tw-text-black tw-font-bold tw-py-2 tw-px-4 tw-rounded"
                    onClick={download}
                  >
                    Download profile
                  </button>
                </div>
                {/* <div className='mx-auto tw-font-sans tw-font-semibold tw-text-[16px] tw=leading-[22px] tw-text-[#fff]'>
                                    <a href='https://wa.me/919167077150' target='_blank'>
                                    <img style={{'height':'29px','marginTop':'10px','borderRadius':'3px'}} src={w}></img>

                                    </a>
                                </div> */}
                <div className="tw-mt-[30px] tw-hidden min-[900px]:tw-block">
                  <img src={logo} alt="ssss" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="tw-w-full tw-relative">
          <div className="tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto">
            <img
              className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
              src={fo1}
              alt="g"
            ></img>
            <div>
              <div className="columns-1">
                <img className="mx-auto" src={logo1} alt="g"></img>
                {/* <img className='mx-auto' src={fo21} alt='g' ></img> */}
                <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mx-40 mt-4 ">
                  <img
                    className="mx-auto"
                    onClick={(e) =>
                      window.open(
                        "https://www.facebook.com/florianhurelmakeuphair?mibextid=ZbWKwL",
                        "_blank"
                      )
                    }
                    src={fb}
                    alt="g"
                  ></img>
                  <img
                    className="mx-auto"
                    onClick={(e) =>
                      window.open(
                        "https://instagram.com/florianhurel?igshid=YmMyMTA2M2Y",
                        "_blank"
                      )
                    }
                    src={insta}
                    alt="g"
                  ></img>
                  {/* <img className='mx-auto' src={twitter} alt='g' ></img> */}
                </div>
              </div>
            </div>
            <img
              className="mx-auto my-auto min-[900px]:tw-block tw-hidden"
              src={fo3}
              alt="g"
            ></img>
          </div>
          <hr className="w-full tw-hidden min-[900px]:tw-block" />
          <div className=" tw-hidden min-[900px]:tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto">
            <div></div>
            <div className="mx-auto tw-text-white">
              &#169;Copyrights 2023 by Florian Design by{" "}
              <a href="https://dibizsolution.com" target="_blank">
                Dibiz Solution
              </a>
            </div>
            <div className="mx-auto tw-text-white">
              Privacy policy / Cookies policy / Terms of use
            </div>
          </div>
          <div className=" tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto">
            {/* <div></div> */}
            <div className="mx-auto tw-text-white">
              &#169;Copyrights 2023 by Florian
            </div>
            <div className="mx-auto tw-text-white tw-mt-[-20px]">
              Design by{" "}
              <a href="https://dibizsolution.com" target="_blank">
                Dibiz Solution
              </a>
            </div>
            <div className="mx-auto tw-text-white">
              Privacy policy / Cookies policy / Terms of use
            </div>
          </div>
        </div>
        <a href="https://wa.me/919167077150" class="float" target="_blank">
          <i class="fa fa-whatsapp my-float"></i>
        </a>
      </div>
    </>
  );
};

export default Contact;
