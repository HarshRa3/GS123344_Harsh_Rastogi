import {RouterProvider} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router'
import {Provider} from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >

  <RouterProvider router={router} />
  </Provider>
)
