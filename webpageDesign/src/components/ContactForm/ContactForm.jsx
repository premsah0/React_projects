import React, { useState } from "react";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {


  const [name, setName] = useState("prem")
  const [email, setEmail] = useState("premsah@gmail.com")
  const [text, setText] = useState("hello pandu");
    const onSubmit = (event)=>{
    event.preventDefault()
    
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value);
  }

  return (
    <section className="w-[1161px] h-[600px] mx-auto flex items-center justify-between">
      {/* LEFT SIDE CARD */}
      <div className="w-[472px] h-[457px] flex flex-col gap-[23px]">
        {/* ================= BUTTON BLOCK ================= */}
        <div className="w-[472px] h-[105px] flex flex-col gap-[17px]">
          <div className="flex justify-between">
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage size={20} />} />

            <Button text="VIA CALL" icon={<FaPhoneAlt size={18} />} />
          </div>

          <Button
            isOutline
            fullWidth
            text="VIA EMAIL FORM"
            icon={<HiMail size={20} />}
          />
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={onSubmit}  className="w-[472px] flex flex-col gap-[17px] ">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Name</label>
            <input className="w-[440px] h-[40px] border border-gray-400 px-3 outline-none focus:border-black" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">E-Mail</label>
            <input className="w-[440px] h-[40px] border border-gray-400 px-3 outline-none focus:border-black" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">TEXT</label>
            <textarea className="w-[440px] h-[120px] border border-gray-400 px-3 py-2 outline-none resize-none focus:border-black" />
          </div>

          {/* Submit */}
          <div className="flex justify-end w-[440px]">
            <Button text="SUBMIT" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="w-[550px] flex justify-center">
        <img
          src="/images/contactmain.svg"
          alt="support"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}

export default ContactForm;
