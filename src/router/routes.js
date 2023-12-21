import LayOut from "../Layout/Layout.vue"
import Home from "../views/Home.vue"
import Questionnaire from "../views/Questionnaire.vue"
const routes = [
    {
        path: "/",
        component: LayOut,
        redirect: "/home",
        children: [
            {
                path: "home",
                name: "Home",
                component: Home
            },
            {
                path: "questionnaire",
                name: "Questionnaire",
                component: Questionnaire
            }
        ],
    },
];

export default routes;