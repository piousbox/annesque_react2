import Home from './Home'
import Blog from './Blog'

const routes = [
  { path: '/',
    component: Home,
    loadData: () => { console.log('loading?..'); return {} },
  },
  { path: '/blog',
    component: Blog,
    loadData: () => { console.log('blog loaging'); return {} },
  },
]

export default routes

