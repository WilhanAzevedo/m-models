import api from "../config";
export default {
  getPlans: () =>
    api({
      method: "GET",
      url: "/pagamento/plano",
    }),
  payPlan:(plano) =>
    api({
      method: "POST",
      url: "/pagamento/assinatura",
      data: plano,
    }),
  
};
