import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortCont = new AbortController();

  useEffect(() => {
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Something wrong! try again in a minute or contact the webmaster via email: indikawijesinghe@gmail.com"
          );
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        if (e.name == "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(e.message);
        }
      });

    return () => abortCont.abort();
  }, []);
  return { data, loading, error };
}
