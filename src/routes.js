import React from 'react';
import {Route} from 'react-router';

import Main from 'components/main.jsx';
import Login from 'components/login.jsx';
import Content from 'components/content.jsx';
import Index from 'components/index.jsx';
import Page2 from 'components/page2.jsx';
import Page3 from 'components/page3.jsx';
import Page4 from 'components/page4.jsx';
import Page5 from 'components/page5.jsx';
import Cont1 from 'components/Cont1.jsx';
import Error from 'components/error.jsx';

const routes = (
    <Route component={Main}>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Content}>
            <Route path='/index' component={Index}></Route>
            <Route path='/page2' component={Page2}></Route>
            <Route path='/page3' component={Page3}></Route>
            <Route path='/page4' component={Page4}>
                <Route path='/cont1' component={Cont1}></Route>
            </Route>
            <Route path='/page5' component={Page5}></Route>
        </Route>
        <Route path='*' component={Error}></Route>
    </Route>
)
export default routes;