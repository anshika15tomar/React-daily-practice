// src/hooks/useApi.js
import { useState, useEffect } from "react";
import axios from "axios";

const useApi = (url, method = "GET", body = null, headers = null, trigger = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios({ method, url, data: body, headers });
      setData(response.data);
    } catch (err) {
      setError(err.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trigger) fetchData();
  }, [url, method, body, trigger]);

  return { data, loading, error, refetch: fetchData };
};

export default useApi;
