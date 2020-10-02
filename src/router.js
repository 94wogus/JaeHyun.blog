import React from 'react';
import PrivacyPolicy from '@views/PrivacyPolicy';
import Home from '@views/Home';

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const routes = [
    {
        name: 'main',
        path: '/',
        component: Home,
        leftmenu: false
    },
    {
        name: 'privacy_policy',
        path: '/privacypolicy',
        component: PrivacyPolicy,
        leftmenu: false
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        leftmenu: true,
        icon: <HomeRoundedIcon fontSize="large" style={{marginLeft: 10}}/>
    }
];

export default routes;
