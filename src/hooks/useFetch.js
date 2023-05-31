import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5001/api");
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, ["http://localhost:5001/api"]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5001/api");
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default UseFetch;
