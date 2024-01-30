import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import  { data }  from "../config/dataCompleted.js";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: routes,
});


router.beforeEach(async (to, from, next) => {
    const requiresData = to.matched.some(record => record.meta.requireData);
    if(requiresData && !data()){
        next('/home');
    } 
    
    else {
        next();
    }

})
  
  export default router;