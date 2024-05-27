"use client";

import Button from "@/app/_components/Button/Button";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormInputData>({
    name: "",
    email: "",
    message: "",
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
    setIsLoading(true);
    event.preventDefault();

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    const response = await fetch("/api/contact", {
      method: "post",
      body,
    });
    setIsLoading(false);
  };

  return (
    <div data-section className={styles.contactSection} id="contact">
      <SectionTitle title="Contact" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="form-name">What is your name?</label>
          <input
            autoComplete="off"
            id="form-name"
            className={styles.input}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="form-email">What is your email?</label>
          <input
            autoComplete="off"
            id="form-email"
            type="email"
            className={styles.input}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="form-message">
            What is your question or request?
          </label>
          <textarea
            id="form-message"
            className={`${styles.input} ${styles.inputArea}`}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.submit}>
          <Button icon={<SendEmailIcon />} isLoading={isLoading} text="Send" />
        </div>
      </form>
    </div>
  );
}
