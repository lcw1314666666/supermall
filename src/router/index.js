import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profile
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// import Vue from 'Vue'

// import VueRouter from 'Vue-Router'

// import Home from '../views/home/Home.vue'
// import Cart from '../views/cart/Cart.vue'
// import Category from '../views/category/Category.vue'
// import Profile from '../views/profile/Profile.vue'


// Vue.use(VueRouter)


// const routes = [
//   {
//     path: '/home',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/cart',
//     name: 'Cart',
//     component: Cart
//   },
//   {
//     path: '/category',
//     name: 'Category',
//     component: Category
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: Profile
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router