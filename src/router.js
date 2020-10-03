import React from 'react';
import PrivacyPolicy from '@views/PrivacyPolicy';
import Home from '@views/Home';
import Post from '@views/Post';
import PostRead from '@views/PostRead';

import {HomeRounded, DescriptionOutlined} from '@material-ui/icons';

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
        name: 'post_doc',
        path: '/post/doc/:id',
        component: PostRead,
        leftmenu: false
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        leftmenu: true,
        icon: <HomeRounded fontSize="large" style={{marginLeft: 10}}/>
    },
    {
        name: 'post',
        path: '/post',
        component: Post,
        leftmenu: true,
        icon: <DescriptionOutlined fontSize="large" style={{marginLeft: 10}}/>
    }

];

export default routes;
