"use client";

import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import { SendEmailIcon } from "@/app/_svg/SendEmailIcon";
import styles from "./contactSection.module.css";

export default function ContactSection() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as any);
    const response = await fetch("/api/contact", {
      method: "post",
      body: formData,
    });
  };

  return (
    <div className={styles.contactSection}>
      <SectionTitle title="Contact" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="form-name">Name </label>
          <input id="form-name" className={styles.input} name="name" required />

          <label htmlFor="form-email"> Email:</label>
          <input
            id="form-email"
            className={styles.input}
            name="email"
            required
          />

          <label htmlFor="form-message"> Message: </label>
          <textarea
            id="form-message"
            className={styles.input}
            name="message"
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
