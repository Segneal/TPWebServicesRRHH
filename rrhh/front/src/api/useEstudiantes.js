import React from "react";

export default function useEstudiantes() {
  const [estudiantes, setEstudiantes] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/usuario/getAllUsuarios")
      .then((response) => response.json())
      .then((data) => {
        setEstudiantes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { estudiantes, error, loading };
}
