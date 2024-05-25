import React, { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase";
import connectbg from '../Static/connect.png'

export default function Form() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [complete, setComplete] = useState(false);
  const [emailError, setEmailError] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "subject") {
      setSubject(value);
    }
    if (id === "message") {
      setMessage(value);
    }
  };

 
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return; // Prevent form submission if email is invalid
    }

    const obj = {
      email: email,
      subject: subject,
      message: message,
    };

    try {
      // Add a new document to the 'users' collection
      await addDoc(collection(db, 'users'), obj);

      // Clear the input fields
      setEmail("");
      setSubject("");
      setMessage("");

      setComplete(true);

      setTimeout(() => {
        setComplete(false);
      }, 9000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  //function to check fields
  const isEnable = () => {
    return email.length > 0 && message.length > 0 && subject.length > 0;
  };

  return (
    <>
      {complete === false ? (
          <div className="card-body text-start">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={handleInputChange}
                />

                <div id="emailHelp" className="form-text">
                  {emailError && (
                    <div className="text-danger">{emailError}</div>
                  )}
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  What is your security objective?
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="4"
                  className="form-control"
                  id="message"
                  value={message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                disabled={!isEnable()}
                className={`btn btn-${
                  isEnable() ? "primary" : "primary"
                } btn btn-custom m-2 `}
                onClick={handleFormSubmit}
              >
                Submit
              </button>
            </form>
          </div>
      ) : null}

      {complete === true ? (
        <img
          src={connectbg}
          alt="..."
          style={{ width: "300px", height: "300px" }}
        />
      ) : null}
    </>
  );
}
