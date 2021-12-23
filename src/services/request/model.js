import api from "../config";
export default {
  getFeaturesModel: (id, token) =>
    api({
      method: "GET",
      url: "/modelo/caracteristica/listarmodelo/" + id,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
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
    }),
  handleProfileImg: (id, img) =>
    api({
      method: "POST",
      url: "/user/imagemperfil/modelo/" + id,
      data: img,
    }),
  uploadImageAlbum: (data) =>
    api({
      method: "POST",
      url: "/user/uploadimage/modelo",
      data: data,
    }),
  changeFeatures: (features) =>
    api({
      method: "PUT",
      url: "/modelo/caracteristica/atualizar",
      data: features,
    }),
  getFeaturesForm: () =>
    api({
      method: "GET",
      url: "/modelo/caracteristica_predefinida/buscarSeparadoPorGrupo",
    }),
};
