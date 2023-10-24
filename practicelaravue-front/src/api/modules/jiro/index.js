// itong `import api na yan, sundan niyo lang path niyan`
import api from "@/api/index";

export default {
  // dito niyo lalagay yung mga api na ginawa niyo sa laravel nasa ../../routes/api.php
  addJiroInfo(params) {
    return api.post("api/addJiroInfo", params);
  },
};
