import api from "../config";
export default {
  getAlbum: (id) =>
    api({
      method: "GET",
      url: "/modelo/album/listarmodeloalbuns/" + id,
    }),
  getJobUser: (id) =>
    api({
      method: "GET",
      url: "/user/listarporid/modeloservico/" + id,
    }),
};
