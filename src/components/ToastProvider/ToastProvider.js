import React from "react";

import ToastShelf from "../ToastShelf";
import useKeyDown from "../../hooks/useKeyDown";

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

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown("Escape", dismissAllToasts);

  return (
    <ToastContext
      value={{
        toasts,
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
