import { useState, useRef } from "react";

export const MyFetching = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef(null); // Збереження контролера

  const fetching = async (callback) => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // Скасовуємо попередній запит, якщо є
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      setIsLoading(true);
      setError("");
      await callback(signal);
    } catch (e) {
      if (e.name !== "AbortError") {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};