// import LayOut from "../Layout/Layout.vue"
const LayOut = () => import('../Layout/Layout.vue')
import Home from "../views/Home.vue"
// import Questionnaire from "../views/Questionnaire.vue"
const Questionnaire = () => import('../views/Questionnaire.vue');
// import GeneralQuestions from "../views/GeneralQuestions";
const GeneralQuestions = () => import('../views/GeneralQuestions.vue')
const FeedBack = () => import('../views/FeedBackSummury.vue')
const CircleProgress = () => import ('../views/CircleProgress.vue')
const DietPage = () => import('../views/DietPage.vue');
import DashboardLanding from '../Client-Dashboard/DashboardLanding';
import DashboardLayout from '../Client-Dashboard/DashboardLayout';
import DashboardQuestionnaire from '../Client-Dashboard/DashboardQuestionnaire'


const routes = [
    {
        path: "/",
        component: LayOut,
        redirect: "/home",
        children: [
            {
                path: "home",
                name: "Home",
                component: Home,
            },
            {
                path: "generalQuestions",
                name: "GeneralQuestions",
                component: GeneralQuestions,
                meta: { isAuth: true },
            },
            {
                path: "questionnaire",
                name: "Questionnaire",
                component: Questionnaire,
                meta: { isAuth: true },
            },
            {
                path: "feedback-wellness",
                name: "FeedBack",
                component: FeedBack,
                meta: {requireData: true}
                
            },
            {
                path: "progress",
                name: "Circle Progress",
                component: CircleProgress,
                meta: {requireData: true}
            },
            {
                path: 'diet-type',
                name: 'DietPage',
                component: DietPage,
                meta: {requireData: true}

            }
        ],
    },
    {
        path: "/",
        name: "Client-Dashboard",
        component: DashboardLayout,
        meta: { isClient: true },
        children: [
            {
            path: "/client-dashboard",
            name: "DashboardLanding",
            component: DashboardLanding
            },
            {
            path: "/client-dashboard/questionnaire",
            name: "DashboardQuestionnaire",
            component: DashboardQuestionnaire
            },
        ],
    },
];

export default routes;