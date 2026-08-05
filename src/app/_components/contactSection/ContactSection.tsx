"use client";

import { FormEvent, useRef, useState } from "react";
import styles from "./contactSection.module.css";

interface FormInputData {
  name: string;
  email: string;
  message: string;
}

type FormField = keyof FormInputData;

type FormFeedback = {
  tone: "success" | "error";
  message: string;
};

type FormErrors = Partial<Record<FormField, string>>;

const initialFormData: FormInputData = {
  name: "",
  email: "",
  message: "",
};

const fieldLabels: Record<FormField, string> = {
  name: "Name",
  email: "Email address",
  message: "Message",
};

function validateField(field: FormField, value: string): string | undefined {
  if (!value.trim()) {
    return field === "name"
      ? "Please enter your name."
      : field === "email"
        ? "Enter your email address."
        : "Please enter a message.";
  }

  if (
    field === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  ) {
    return "Enter a valid email address.";
  }

  return undefined;
}

function validateForm(data: FormInputData): FormErrors {
  return (Object.keys(data) as FormField[]).reduce<FormErrors>(
    (errors, field) => {
      const error = validateField(field, data[field]);
      if (error) {
        errors[field] = error;
      }
      return errors;
    },
    {},
  );
}

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormInputData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);
  const fieldRefs = useRef<
    Record<FormField, HTMLInputElement | HTMLTextAreaElement | null>
  >({
    name: null,
    email: null,
    message: null,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target as {
      name: FormField;
      value: string;
    };

    setFormData((currentData) => ({ ...currentData, [name]: value }));
    setFeedback(null);

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((currentErrors) => ({
        ...currentErrors,
        ...(error ? { [name]: error } : { [name]: undefined }),
      }));
    }
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as FormField;
    const value = event.target.value;

    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
    const error = validateField(field, value);
    setErrors((currentErrors) => ({
      ...currentErrors,
      ...(error ? { [field]: error } : { [field]: undefined }),
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    setFeedback(null);

    const firstInvalidField = (Object.keys(formData) as FormField[]).find(
      (field) => nextErrors[field],
    );

    if (firstInvalidField) {
      fieldRefs.current[firstInvalidField]?.focus();
      return;
    }

    setIsLoading(true);

    const body = new FormData();
    body.append("name", formData.name.trim());
    body.append("email", formData.email.trim());
    body.append("message", formData.message.trim());

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
            data.message ??
            "The message could not be sent. Please try again or contact me by email.",
        });
        return;
      }

      setFeedback({
        tone: "success",
        message: "Thanks — your message has been sent.",
      });
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
    } catch {
      setFeedback({
        tone: "error",
        message:
          "The message could not be sent. Please try again or contact me by email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldError = (field: FormField) =>
    touched[field] ? errors[field] : undefined;

  return (
    <section
      data-section
      className={styles.contactSection}
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        <hr className={styles.divider} aria-hidden="true" />
        <div className={styles.contactLayout}>
          <div className={styles.contactCopy}>
            <span className={styles.number}>05</span>
            <h2 className={styles.heading} id="contact-title">
              Contact
            </h2>
            <div className={styles.copyText}>
              <p>
                I&apos;m open to senior backend roles in South Korea, especially
                with product teams building backend platforms, data systems, or
                industrial software.
              </p>
              <p>
                Have a role, project, or technical challenge in mind? Send me a
                message and I&apos;ll get back to you.
              </p>
            </div>

            <div className={styles.contactLinks}>
              <div className={styles.linkGroup}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.emailNote}>
                  Use the form to send me a direct message.
                </span>
              </div>
              <div className={styles.linkGroup}>
                <span className={styles.linkLabel}>Elsewhere</span>
                <div className={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/in/alexvanhoutte/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Alexandre Vanhoutte on LinkedIn"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href="https://github.com/alexandrevanhoutte/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Alexandre Vanhoutte on GitHub"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className={styles.linkGroup}>
                <span className={styles.linkLabel}>Resume</span>
                <a
                  href="/files/alexandre-vanhoutte-cv.pdf"
                  className={styles.downloadLink}
                  download="Alexandre-Vanhoutte-CV.pdf"
                >
                  Download my CV ↓
                </a>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-busy={isLoading}
          >
            {(["name", "email", "message"] as FormField[]).map((field) => {
              const error = getFieldError(field);
              const inputId = `form-${field}`;
              const errorId = `${inputId}-error`;

              return (
                <div
                  className={`${styles.formGroup} ${
                    field === "message" ? styles.messageField : ""
                  }`}
                  key={field}
                >
                  <label htmlFor={inputId}>{fieldLabels[field]}</label>
                  {field === "message" ? (
                    <textarea
                      ref={(element) => {
                        fieldRefs.current.message = element;
                      }}
                      id={inputId}
                      name={field}
                      className={`${styles.input} ${styles.inputArea}`}
                      placeholder="Tell me briefly about the role, project, or question."
                      value={formData[field]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                    />
                  ) : (
                    <input
                      ref={(element) => {
                        fieldRefs.current[field] = element;
                      }}
                      id={inputId}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      autoComplete={field === "name" ? "name" : "email"}
                      className={styles.input}
                      placeholder={
                        field === "name" ? "Your name" : "you@company.com"
                      }
                      value={formData[field]}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? errorId : undefined}
                    />
                  )}
                  {error ? (
                    <p className={styles.fieldError} id={errorId} role="alert">
                      {error}
                    </p>
                  ) : null}
                </div>
              );
            })}

            <div className={styles.formFooter}>
              {feedback ? (
                <p
                  aria-live="polite"
                  className={`${styles.feedback} ${
                    feedback.tone === "success"
                      ? styles.feedbackSuccess
                      : styles.feedbackError
                  }`}
                  role="status"
                >
                  {feedback.message}
                </p>
              ) : null}
              <button
                className={styles.submitButton}
                type="submit"
                disabled={isLoading}
                aria-busy={isLoading}
              >
                {isLoading ? "Sending..." : "Send message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
