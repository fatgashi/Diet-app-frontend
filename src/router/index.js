import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import store from "../store/index.js";
import { isTokenAvaible } from "../config/localStorage.js";
import { isAdmin } from "../config/userLogic.js";
// import  { data }  from "../config/dataCompleted.js";

Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: routes,
});


router.beforeEach(async (to, from, next) => {
    const requiresData = to.matched.some(record => record.meta.requireData);
    const requireAuthentication = to.matched.some(record => record.meta.isClient);
    const requireAuthorization = to.matched.some(record => record.meta.isAdmin);
    const isAuthenticated = isTokenAvaible();

    if(requireAuthentication){
        if(isAuthenticated){
            const authorized = await isAdmin();
            if(!authorized){
                next();
            } else {
                next('/home');
            }
        } else {
            next('/home')
        }
    }
    else if(requireAuthorization){
        if(isAuthenticated){
            const authorized = await isAdmin();
            if(!authorized){
                next('/home')
            } else {
                next();
            }
        } else {
            next('/home');
        }
    }
    else if(requiresData && store.state.answers.length < 32){
        next('/home');
    } 
    
    else {
        next();
    }

})
  
  export default router;