import React from 'react';
import classes from './AppBody.module.css';
import {Route, Routes} from "react-router-dom";

const AppBody = () => {
    return (
        <div className={classes.AppBody}>
            <Routes>
                <Route path={"/"}></Route>
                {/*<Route path={"/list"} element={<XList/>}></Route>*/}
                {/*<Route path={"/form"} element={<XForm/>}></Route>*/}
            </Routes>
        </div>
    );
};

export default AppBody;