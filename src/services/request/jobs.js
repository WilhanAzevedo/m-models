import api from "../config";
const token = localStorage.getItem("token");

export default {
  getAlbum: (id) =>
    api({
      method: "GET",
      url: "/modelo/album/listarmodeloalbuns/" + id,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJobs: () =>
    api({
      method: "GET",
      url: "/servicos/listar",
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJobsRecents: () =>
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
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
  getJobUser: (id) =>
    api({
      method: "GET",
      url: "/user/listarporid/modeloservico/" + id,
    }),
  setJobModel: (data) =>
    api({
      method: "POST",
      url: "/user/vincular/modeloservico",
      data: data,
      headers: {
        Authorization: token ? "Bearer " + token : "",
      },
    }),
};
