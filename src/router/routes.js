// import LayOut from "../Layout/Layout.vue"
const LayOut = () => import('../Layout/Layout.vue')
import Home from "../views/Home.vue"
// import Questionnaire from "../views/Questionnaire.vue"
const Questionnaire = () => import('../views/Questionnaire.vue');
// import GeneralQuestions from "../views/GeneralQuestions";
const GeneralQuestions = () => import('../views/GeneralQuestions.vue')
const FeedBack = () => import('../views/FeedBackSummury.vue')
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
            },
            {
                path: "feedback-wellness",
                name: "FeedBack",
                component: FeedBack,
                meta: {requireData: true}
                
            },
        ],
    },
];

export default routes;