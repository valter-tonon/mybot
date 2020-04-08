import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Home from './Pages/Main'
import QuemSomos from './Pages/QuemSomos'
//import Blog from './Pages/Blog'
import Contato from './Pages/Contato'

export default function Routes(){
    return(
        <Switch>
            <Route path='/' exact component= {Home}/>
            <Route path='/quemsomos' component= {QuemSomos}/>
            <Route path='/contato' component = {Contato}/>
        </Switch>
    )
}

