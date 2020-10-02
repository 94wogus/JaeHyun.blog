import React from 'react';
import {withRouter} from "react-router-dom"

import jaehyun from "@image/jaehyun.jpg"
import IconButton from '@material-ui/core/IconButton';
import {LinkedIn, GitHub, Instagram, Facebook} from '@material-ui/icons';

const email = "94wogus@gmail.com"
const workEmail = "94wogus@quantit.io"

const snsList = [
    {  
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jae-hyun-back-a1496118b/",
        icon: <LinkedIn className="icon"/>
    },
    {
        name: "GitHub",
        url: "https://github.com/94wogus/",
        icon: <GitHub className="icon"/>
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jaehyunback/?hl=ko",
        icon: <Instagram className="icon"/>
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/back.jaehyun/",
        icon: <Facebook className="icon"/>
    }
]

const Profile = (props) => {
    const { history } = props;

    const goHome = () => {
        if (history.location.pathname !== "/home" && history.location.pathname !== "/" ){
            // history.push('/home')
            console.log("good")
        }
    }

    const goSns = (e) => {
        window.open(e.currentTarget.getAttribute("path"), '_blank');
    } 

    return (
        <div id="profileContainer">
            <img className="profileImage" src={jaehyun} alt="jaehyun-character"/>
            <div className="profile">
                <div>
                    <span>JaeHyun.Back</span> / Developer(Quantit)
                </div>
                <div>
                    email: <a href={`mailto:${email}`} title="개인 이메일">{email}</a>
                </div>
                <div>
                    work-email: <a href={`mailto:${workEmail}`} title="업무용 이메일">{workEmail}</a>
                </div>
                <div className="snsList">
                    {snsList.map((sns) => (
                        <IconButton
                            key={sns.name}
                            onClick={goSns}
                            path={sns.url}
                        >
                            {sns.icon}
                        </IconButton>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default withRouter(Profile);
