import About from "./pages/About.vue"
import HomePage from "./pages/HomePage.vue"
import QuizPage from "./pages/QuizPage.vue"

export const routes = [
    {path: '/', component: HomePage},
    {path: '/quiz', component: QuizPage},
    {path: '/about', component: About}
]
