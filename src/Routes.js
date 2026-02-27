
import About from "./pages/About.vue"
import HomePage from "./pages/HomePage.vue"
import QuizPage from "./pages/QuizPage.vue"
import TodoPage from "./pages/Todo.vue"

export const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/quiz', name: 'quiz', component: QuizPage },
    { path: '/todo', name: 'todo', component: TodoPage },
    { path: '/about', name: 'about', component: About }
]
