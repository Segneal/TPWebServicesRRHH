import axios from "axios";

export const getAllEstudiantes = async () => {
  const route = "http://localhost:3000/usuario/getAllUsuarios";
  const response = await axios.get(route);
  console.log(response.data);
  return response.data;
};
