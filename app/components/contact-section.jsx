"use client";
import InputElement from "../components/inputElement";
import Button from "../components/button";
import SubHeading from "./subheading";
import { fadeInViewport } from "./framer-constants";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ContactUsSection = function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const result = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((d) => d.json());

    if (result.success) {
      alert("Email sent successfully");
    } else {
      alert("Failed to send email:", result.error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="mb-5">
        <SubHeading {...fadeInViewport}>Contact Us</SubHeading>
      </div>
      <div className="max-lg:space-y-10 max-lg:max-w-[800px] mx-auto lg:flex gap-x-[52px] max-md:contents relative py-[23px]  lg:before:block lg:before:absolute before:top-0 before:left-o lg:before:bg-black before:rounded-l-[8px] before:w-[403px] before:h-full before:z-[-1]">
        <div className="grow-1 lg:w-1/2 lg:ms-[63px] w-full max-lg:aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.184441462245!2d3.159348264995647!3d6.459186914640068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86ec135d7297%3A0xf3dfa0e90cc163df!2sAlabastore!5e0!3m2!1sen!2sng!4v1747683094301!5m2!1sen!2sng"
            className="w-full h-full border-none"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/2 lg:max-w-[518px] w-full">
          <h3 className="text-[30px] font-bold">Contact Information</h3>
          <small>Get in touch</small>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-[45px] ">
            <InputElement
              label="First name"
              type="text"
              placeholder="John"
              value={watch("firstName") || ""}
              {...register("firstName", { required: true, validate: (v) => v.trim() !== "" })}
              error={errors.firstName ? "First name is required" : ""}
            />
            <InputElement
              label="Last name"
              type="text"
              placeholder="Wick"
              value={watch("lastName") || ""}
              {...register("lastName", { required: true, validate: (v) => v.trim() !== "" })}
              error={errors.lastName ? "Last name is required" : ""}
            />
            <InputElement
              label="Email address"
              type="email"
              placeholder="johnwick@gmail.com"
              value={watch("email") || ""}
              {...register("email", { required: true, validate: (v) => v.trim() !== "" })}
              error={errors.email ? "Email address is required" : ""}
            />
            <InputElement
              label="Phone number"
              type="number"
              placeholder="08099887766"
              value={watch("phone") || ""}
              {...register("phone", { required: true, validate: (v) => v.trim() !== "" })}
              error={errors.phone ? "Phone number is required" : ""}
            />
            <InputElement
              label="Message"
              type="text"
              placeholder="Please type here"
              value={watch("message") || ""}
              {...register("message", { required: true, validate: (v) => v.trim() !== "" })}
              error={errors.message ? "Message is required" : ""}
            />

            <Button className="rounded-2xl max-w-[518px] mx-auto cursor-pointer" type="submit" disabled={loading}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Send a message"
              )}
            </Button>
          </form>
          <div>
            <div className="space-y-4 split:flex justify-between mt-10">
              <div className="flex split:block space-x-3">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.3312 4.84925C19.3656 4.72036 19.4252 4.59952 19.5064 4.49365C19.5876 4.38777 19.6888 4.29893 19.8044 4.2322C19.9199 4.16547 20.0474 4.12216 20.1797 4.10474C20.312 4.08733 20.4464 4.09615 20.5753 4.1307C22.4581 4.62194 24.1759 5.60621 25.5518 6.98211C26.9277 8.35802 27.912 10.0758 28.4032 11.9586C28.4378 12.0875 28.4466 12.2219 28.4292 12.3542C28.4118 12.4865 28.3685 12.614 28.3017 12.7296C28.235 12.8451 28.1462 12.9464 28.0403 13.0276C27.9344 13.1088 27.8136 13.1683 27.6847 13.2028C27.5989 13.2253 27.5106 13.2368 27.4219 13.237C27.1982 13.2371 26.9808 13.1634 26.8034 13.0272C26.626 12.8911 26.4984 12.7002 26.4405 12.4842C26.0401 10.947 25.2369 9.54438 24.1137 8.42101C22.9906 7.29764 21.5881 6.49415 20.051 6.0934C19.922 6.05906 19.801 5.99962 19.695 5.91849C19.589 5.83735 19.5 5.73611 19.4331 5.62056C19.3663 5.50501 19.3229 5.37741 19.3054 5.24506C19.2879 5.11271 19.2966 4.97821 19.3312 4.84925ZM19.0354 10.1559C20.786 10.6231 21.9109 11.7492 22.378 13.4998C22.4359 13.7159 22.5635 13.9067 22.7409 14.0429C22.9183 14.179 23.1357 14.2527 23.3594 14.2527C23.4481 14.2524 23.5364 14.2409 23.6222 14.2184C23.7511 14.1839 23.8719 14.1244 23.9778 14.0432C24.0837 13.962 24.1725 13.8607 24.2392 13.7452C24.306 13.6297 24.3493 13.5021 24.3667 13.3698C24.3841 13.2375 24.3753 13.1031 24.3407 12.9743C23.6907 10.5418 21.9921 8.8432 19.5597 8.1932C19.4308 8.15877 19.2964 8.15007 19.1642 8.16758C19.0319 8.18509 18.9044 8.22847 18.789 8.29526C18.6735 8.36204 18.5723 8.45091 18.4912 8.5568C18.4101 8.66269 18.3506 8.78352 18.3162 8.91239C18.2817 9.04126 18.273 9.17565 18.2906 9.30789C18.3081 9.44013 18.3514 9.56762 18.4182 9.68309C18.485 9.79856 18.5739 9.89975 18.6798 9.98087C18.7857 10.062 18.9065 10.1215 19.0354 10.1559ZM28.2306 20.1509L22.2498 17.4709L22.2333 17.4633C21.9228 17.3305 21.5841 17.2772 21.2479 17.3083C20.9116 17.3393 20.5884 17.4537 20.3074 17.6411C20.2744 17.6629 20.2426 17.6866 20.2122 17.7121L17.1222 20.3464C15.1646 19.3955 13.1435 17.3897 12.1926 15.4575L14.8307 12.3204C14.8561 12.2887 14.8802 12.257 14.903 12.2227C15.0864 11.9425 15.1976 11.6213 15.2269 11.2878C15.2561 10.9542 15.2024 10.6186 15.0706 10.3108V10.2955L12.383 4.30463C12.2088 3.90252 11.9091 3.56756 11.5289 3.34973C11.1486 3.13191 10.7081 3.04292 10.2731 3.09603C8.55281 3.3224 6.97377 4.16722 5.83088 5.47272C4.68799 6.77821 4.0594 8.45509 4.06251 10.1902C4.06251 20.2703 12.2637 28.4714 22.3438 28.4714C24.0788 28.4745 25.7557 27.8459 27.0612 26.703C28.3667 25.5602 29.2115 23.9811 29.4379 22.2609C29.4911 21.826 29.4023 21.3856 29.1847 21.0053C28.9671 20.6251 28.6324 20.3254 28.2306 20.1509Z"
                    fill="#000033"
                  />
                </svg>
                <p>090000000018</p>
              </div>
              <div className="flex split:block space-x-3">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28.9375 6.12793H4.5625C4.29314 6.12793 4.03481 6.23493 3.84434 6.4254C3.65388 6.61587 3.54688 6.87419 3.54688 7.14355V24.4092C3.54688 24.9479 3.76088 25.4646 4.14181 25.8455C4.52275 26.2264 5.0394 26.4404 5.57812 26.4404H27.9219C28.4606 26.4404 28.9773 26.2264 29.3582 25.8455C29.7391 25.4646 29.9531 24.9479 29.9531 24.4092V7.14355C29.9531 6.87419 29.8461 6.61587 29.6557 6.4254C29.4652 6.23493 29.2069 6.12793 28.9375 6.12793ZM27.9219 24.4092H5.57812V9.45283L16.0632 19.0645C16.2506 19.2365 16.4956 19.3319 16.75 19.3319C17.0044 19.3319 17.2494 19.2365 17.4368 19.0645L27.9219 9.45283V24.4092Z"
                    fill="#000033"
                  />
                </svg>

                <p>090000000018</p>
              </div>
            </div>
            <div className="flex gap-x-3 mt-6">
              <svg className="w-10" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.25 2.31543C13.2881 2.31879 10.4484 3.4969 8.354 5.59131C6.2596 7.68571 5.08149 10.5254 5.07812 13.4873C5.07812 23.0469 15.2344 30.2667 15.6673 30.5688C15.8381 30.6885 16.0415 30.7526 16.25 30.7526C16.4585 30.7526 16.6619 30.6885 16.8327 30.5688C17.2656 30.2667 27.4219 23.0469 27.4219 13.4873C27.4185 10.5254 26.2404 7.68571 24.146 5.59131C22.0516 3.4969 19.2119 2.31879 16.25 2.31543ZM16.25 9.4248C17.0535 9.4248 17.8389 9.66307 18.507 10.1095C19.1751 10.5559 19.6958 11.1903 20.0033 11.9327C20.3107 12.675 20.3912 13.4918 20.2344 14.2799C20.0777 15.0679 19.6908 15.7918 19.1226 16.3599C18.5545 16.9281 17.8306 17.315 17.0426 17.4717C16.2545 17.6285 15.4377 17.548 14.6953 17.2406C13.953 16.9331 13.3185 16.4124 12.8722 15.7443C12.4258 15.0762 12.1875 14.2908 12.1875 13.4873C12.1875 12.4099 12.6155 11.3765 13.3774 10.6147C14.1392 9.85282 15.1726 9.4248 16.25 9.4248Z"
                  fill="#000033"
                />
              </svg>
              <p>
                C33.38 century mall, ojo lagos. <br /> Block 17 shop 11-13 Civic center Market, Kano
              </p>
              {/* <p>Shenzhen Meitongfu Industrial Security Intelligent Industrial Park, Guangming New District, Shenzhen, Guangdong</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
