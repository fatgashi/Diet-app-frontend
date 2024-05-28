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
import DashboardLanding from '../Client-Dashboard/DashboardLanding.vue';
import DashboardLayout from '../Client-Dashboard/DashboardLayout.vue';
import DashboardQuestionnaire from '../Client-Dashboard/DashboardQuestionnaire.vue';
import RecompleteQuestionnaire from '../Client-Dashboard/RecompleteQuestionnaire.vue';
import DashboardDiet from '../Client-Dashboard/DashboardDiet.vue';
import AdminDashboardLayout from '../Admin-Dashboard/DashboardLayout.vue';
import AdminDashboardLanding from '../Admin-Dashboard/DashboardLanding.vue';


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
            {
                path: "/client-dashboard/recomplete-questionnaire",
                name: "DashboardRecompleteQuestionnaire",
                component: RecompleteQuestionnaire
            },
            {
                path: "/client-dashboard/diet",
                name: "DashboardDiet",
                component: DashboardDiet
            },
        ],
    },
    {
        path: "/",
        name: "Admin-Dashboard",
        component: AdminDashboardLayout,
        meta: { isAdmin: true },
        children: [
            {
                path: "/admin-dashboard",
                name: "AdminDashboardLanding",
                component: AdminDashboardLanding
            },
        ]
    }
];

export default routes;