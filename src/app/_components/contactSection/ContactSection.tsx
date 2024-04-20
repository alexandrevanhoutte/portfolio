"use client";

import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import { SendEmailIcon } from "@/app/_svg/SendEmailIcon";
import { useState } from "react";
import styles from "./contactSection.module.css";

interface FormInputData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormInputData>({
    name: "tata",
    email: "ta",
    message: "at",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    const response = await fetch("/api/contact", {
      method: "post",
      body,
    });
  };

  return (
    <div className={styles.contactSection}>
      <SectionTitle title="Contact" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="form-name">Name </label>
          <input
            id="form-name"
            className={styles.input}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="form-email"> Email:</label>
          <input
            id="form-email"
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="form-message"> Message: </label>
          <textarea
            id="form-message"
            className={styles.input}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.submit}>
          <button className={styles.button} type="submit">
            <SendEmailIcon />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
