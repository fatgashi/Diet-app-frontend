import LayOut from "../Layout/Layout.vue"
import Home from "../views/Home.vue"
import Questionnaire from "../views/Questionnaire.vue"
import GeneralQuestions from "../views/GeneralQuestions";
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
                path: "generalQuestions",
                name: "GeneralQuestions",
                component: GeneralQuestions
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