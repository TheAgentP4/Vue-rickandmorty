import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "Home" },
        },
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue'),
        },
        
    ]
})

export default router