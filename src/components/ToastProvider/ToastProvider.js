import React from "react";

import ToastShelf from "../ToastShelf";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (message, variant) => {
    const id = crypto.randomUUID();
    setToasts([...toasts, { id, message, variant }]);
  };

  const dismissToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext
      value={{
        createToast,
        dismissToast,
      }}
    >
      {children}
      <ToastShelf toasts={toasts} dismissToast={dismissToast} />
    </ToastContext>
  );
}

export default ToastProvider;
