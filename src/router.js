import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Error from '@/views/Error'

//Función que nos permite instalar plugings o incorporar diferentes plugins
//o utilidades que tiene la libreria
Vue.use(Router)

export default new Router({
    mode: 'history',

    //Estas serían las cosas a escribir cada vez que configuramos una 
    //nueva ruta
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})