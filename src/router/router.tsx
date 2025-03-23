import {createBrowserRouter} from 'react-router-dom';
import { App } from '../App';
const router=createBrowserRouter([
    {path:'/',element:<App/>,children:[
        {index:true,element:<h1>asda</h1>}
    ]}
]);

export default router;