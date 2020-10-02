import React, {Fragment} from 'react';

import Header from "@components/common/Header"
import Footer from "@components/common/Footer"
import LeftMenu from "@components/common/LeftMenu"

const Container = (props) => {
    const { children } = props;
  
    return (
        <Fragment>
            <Header />
            <LeftMenu />
            {children}
            <Footer />
        </Fragment>
    );
}

export default Container;
