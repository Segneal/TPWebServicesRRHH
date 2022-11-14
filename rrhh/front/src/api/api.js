import axios from "axios";
const baseUrl = "http://localhost:3000/";

export async function getAllEstudiantes() {
  const route = `${baseUrl}usuario/getAllUsuarios`;
  const response = await axios.get(route);
  console.log(response.data);
  return response.data;
}

export async function getAllCandidatos() {
  const route = `${baseUrl}candidato/getAllCandidatos`;
  const response = await axios.get(route);
  console.log(response.data);
  return response.data;
}

export async function crearCandidato(idUsuario) {
  const route = `${baseUrl}candidato/createCandidato`;
  const response = await axios.post(route, {
    idUsuario: idUsuario,
    estado: "Sin Contactar",
  });
  return response.data;
}

export async function updateCandidato(idUsuario, estado) {
  const route = `${baseUrl}candidato/updateCandidato/${idUsuario}`;
  const response = await axios.put(route, {
    estado: estado,
  });
  return response.data;
}
