"use client";

import Button from "@/app/_components/Button/Button";
import { FadeIn } from "@/app/_components/fadeIn/FadeIn";
import SectionTitle from "@/app/_components/sectionTitle/SectionTitle";
import { SendEmailIcon } from "@/app/_svg/SendEmailIcon";
import { useState } from "react";
import styles from "./contactSection.module.css";

interface FormInputData {
  name: string;
  email: string;
  message: string;
}

type FormFeedback = {
  tone: "success" | "error";
  message: string;
};

const initialFormData: FormInputData = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormInputData>(initialFormData);
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const { name, value } = event.target;
    if (feedback) {
      setFeedback(null);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body,
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setFeedback({
          tone: "error",
          message:
            data?.message ??
            "Sorry, your message could not be sent this time. Please try again.",
        });
        return;
      }

      setFeedback({
        tone: "success",
        message:
          data?.message ??
          "Thanks for your message. I will get back to you as soon as possible.",
      });
      setFormData(initialFormData);
    } catch {
      setFeedback({
        tone: "error",
        message:
          "Network issue detected. Please retry in a moment or email me directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section data-section className={styles.contactSection} id="contact">
      <SectionTitle title="Contact" />
      <div className={styles.content}>
        <FadeIn duration="0.8s" y={10}>
          <p className={styles.kicker}>Let&apos;s connect</p>
        </FadeIn>
        <FadeIn duration="0.85s" delay="0.08s" y={14}>
          <p className={styles.intro}>
            If you would like to discuss an opportunity, a backend challenge,
            or a collaboration, feel free to reach out.
          </p>
        </FadeIn>
        <FadeIn duration="0.9s" delay="0.14s" y={10}>
          <p className={styles.responseTime}>
            <span className={styles.responseDot} aria-hidden />
            Usually replying within 24 hours.
          </p>
        </FadeIn>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formInput}>
            <label htmlFor="form-name">Your name</label>
            <input
              autoComplete="name"
              id="form-name"
              className={styles.input}
              name="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="form-email">Email address</label>
            <input
              autoComplete="email"
              id="form-email"
              type="email"
              className={styles.input}
              name="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="form-message">Opportunity details or question</label>
            <textarea
              id="form-message"
              className={`${styles.input} ${styles.inputArea}`}
              name="message"
              placeholder="Tell me about the role or opportunity, timeline, and expected impact."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          {feedback && (
            <p
              aria-live="polite"
              className={`${styles.feedback} ${
                feedback.tone === "success" ? styles.feedbackSuccess : styles.feedbackError
              }`}
              role="status"
            >
              {feedback.message}
            </p>
          )}

          <div className={styles.submit}>
            <Button
              className={styles.contactButton}
              iconClassName={styles.contactButtonIcon}
              icon={<SendEmailIcon />}
              isLoading={isLoading}
              textClassName={styles.contactButtonText}
              text={isLoading ? "Sending..." : "Send message"}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
