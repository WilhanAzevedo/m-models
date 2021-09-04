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
  getJob: (id) =>
    api({
      method: "GET",
      url: "/servicos/listarporid/" + id,
    }),
  setJobModel: (data) =>
    api({
      method: "POST",
      url: "/user/vincular/modeloservico",
      data: data,
    }),
};
