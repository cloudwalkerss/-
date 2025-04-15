import {createRouter,createWebHistory} from 'vue-router'

const router    =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'login',
            component:()=>import('@/views/Login.vue')
        }

        ]
})
export  default  router//需要导出才能使用