import React from "react";

export default function useFetch(url, opts) {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch(url, opts)
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((er) => setError(er));
  }, []);

  return { response, error };
}
