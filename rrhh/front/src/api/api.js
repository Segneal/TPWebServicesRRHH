import axios from "axios";
const baseUrl = "http://localhost:3000/";

export const getAllEstudiantes = async () => {
  const route = `${baseUrl}usuario/getAllUsuarios`;
  const response = await axios.get(route);
  console.log(response.data);
  return response.data;
};

export const getAllCandidatos = async () => {
  const route = `${baseUrl}candidato/getAllCandidatos`;
  const response = await axios.get(route);
  console.log(response.data);
  return response.data;
};
