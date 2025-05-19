import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [], setToasts = () => {} }) {
  const handleDismiss = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, message, variant }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            onDismiss={() => {
              handleDismiss(id);
            }}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
