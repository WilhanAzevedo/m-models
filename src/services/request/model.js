import api from "../config";
const token = localStorage.getItem("token");

export default {
  getFeaturesModel: (id) =>
    api({
      method: "GET",
      url: "/modelo/caracteristica/listarmodelo/" + id,
    }),
  saveUser: (user) =>
    api({
      method: "POST",
      url: "/user/criar/modelo",
      data: user,
    }),
  changeUser: (user) =>
    api({
      method: "PUT",
      url: "/user/update/modelo/dadosPessoais",
      data: user,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  handleProfileImg: (id, img) =>
    api({
      method: "POST",
      url: "/user/imagemperfil/modelo/" + id,
      data: img,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  uploadImageAlbum: (data) =>
    api({
      method: "POST",
      url: "/user/uploadimage/modelo",
      data: data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  changeFeatures: (features) =>
    api({
      method: "PUT",
      url: "/modelo/caracteristica/atualizar",
      data: features,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  createFeatures: (features) =>
    api({
      method: "POST",
      url: "/modelo/caracteristica/criar",
      data: features,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
  }),
  getFeaturesForm: () =>
    api({
      method: "GET",
      url: "/modelo/caracteristica_predefinida/buscarSeparadoPorGrupo",
    }),
  deletePhotoUser: (id) =>
    api({
      method: "DELETE",
      url: "/user/uploadimage/modelo/deletar/" + id,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
};
