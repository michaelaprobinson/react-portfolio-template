import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-only-email">
          <h1>Contact Me</h1>
          {/* ❗Repace userName@gmail.com with your email address*/}
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen! Email me at: userName@email.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
