"use client";

import Loader from "@/app/_components/loader/Loader";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
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
            className={`${styles.input} ${styles.inputArea}`}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.submit}>
          <button className={styles.button} type="submit">
            <div className={styles.icon}>
              {!isLoading ? <Loader /> : <Loader />}
            </div>
            <div className={styles.name}>Send</div>
          </button>
        </div>
      </form>
    </div>
  );
}
