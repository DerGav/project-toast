import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  const pushToast = (message, variant) => {
    const id = crypto.randomUUID();
    setToasts([...toasts, { id, message, variant }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pushToast(message, toastVariant);

    // reset ui
    setMessage("");
    setToastVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => {
                const variantId = `variant-${variant}`;
                return (
                  <label key={variantId} htmlFor={variantId}>
                    <input
                      id={variantId}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={variant === toastVariant}
                      onChange={(event) => {
                        setToastVariant(event.target.value);
                      }}
                    />
                    {variant}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button role="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
