import api from "../config";
export default {
  getAlbum: (id, token) =>
    api({
      method: "GET",
      url: "/modelo/album/listarmodeloalbuns/" + id,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJobs: (token) =>
    api({
      method: "GET",
      url: "/servicos/listar",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJobsRecents: (token) =>
    api({
      method: "GET",
      url: "/servicos/listar/servicosnovos/",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJob: (id) =>
    api({
      method: "GET",
      url: "/servicos/listarporid/" + id,
    }),
  getJobUser: (id, token) =>
    api({
      method: "GET",
      url: "/user/listarporid/modeloservico/" + id,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  setJobModel: (data) =>
    api({
      method: "POST",
      url: "/user/vincular/modeloservico",
      data: data,
    }),
};
