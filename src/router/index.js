import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/session/Login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/esqueci-minha-senha",
    name: "ForgotPassword",
    component: () => import("../views/session/ForgotPassword.vue"),
  },
  {
    path: "/confirmar-codigo",
    name: "ConfirmCode",
    component: () => import("../views/session/ConfirmCode.vue"),
  },
  {
    path: "/redefinir-senha",
    name: "NewPassword",
    component: () => import("../views/session/NewPassword.vue"),
  },
  {
    path: "/criar-conta",
    name: "CreateAccount",
    component: () => import("../views/session/CreateAccount.vue"),
  },
  {
    path: "/criar-conta-modelo",
    name: "RegisterModel",
    component: () => import("../views/session/RegisterModel.vue")
  },
  {
    path: "/localizacao",
    name: "Localization",
    component: () => import("../views/session/Localization.vue")
  },
  {
    path: "/criar-conta-contratante",
    name: "RegisterContractor",
    component: () => import("../views/session/RegisterContractor.vue")
  },
  {
    path: "/dados-empresariais",
    name: "CompanyInformation",
    component: () => import("../views/session/CompanyInformation.vue")
  },
  {
    path: "/perfil",
    name: "profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/editar-perfil",
    name: "EditProfile",
    component: () => import("../views/EditProfile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
