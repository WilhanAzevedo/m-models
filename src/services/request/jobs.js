import api from "../config";
export default {
  getAlbum: (id) =>
    api({
      method: "GET",
      url: "/modelo/album/listarmodeloalbuns/" + id,
    }),
  getJobs: () =>
    api({
      method: "GET",
      url: "/servicos/listar",
    }),
  getJobsRecents: () =>
    api({
      method: "GET",
      url: "/servicos/listar/servicosnovos/",
    }),
  getJob: (id) =>
    api({
      method: "GET",
      url: "/servicos/listarporid/" + id,
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
    }),
};
