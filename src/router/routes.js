import Index from '../pages/Index.vue';
import City from '../pages/City.vue';
import List from '../pages/List.vue';
import Detail from '../pages/Detail.vue';
import Search from '../pages/Search.vue';

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/City',
    name: 'City',
    component: City
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
]