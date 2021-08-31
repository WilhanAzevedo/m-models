import api from "../config";
export default {
    getFeaturesModel: (id) =>
        api({
            method: "GET",
            url: "/modelo/caracteristica/listarmodelo/" + id,

        }),
    changeUser: (user) =>
        api({
            method: "PUT",
            url: "/user/update/modelo/dadosPessoais",
            data: user

        }),
    handleProfileImg: (id, img) =>
        api({
            method: "PUT",
            url: "/user/imagemperfil/modelo/" + id,
            data: img

        })
}