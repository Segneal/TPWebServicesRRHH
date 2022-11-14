import React from "react";

export default function useCandidatos() {
  const [candidatos, setCandidatos] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/candidato/getAllCandidatos")
      .then((response) => response.json())
      .then((data) => {
        setCandidatos(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { candidatos, error, loading };
}
