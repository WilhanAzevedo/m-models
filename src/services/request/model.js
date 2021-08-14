import api from "../config";
export default {
    getFeaturesModel: (id) =>
        api({
            method: "GET",
            url: "/modelo/caracteristica/listarmodelo/" + id,

        })
}