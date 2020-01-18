import React from "react";
import { render } from "react-dom";
import { Router } from 'react-router-dom';
import LoadableApp from './loadableApp';
import history from './helpers/history';

render(
    <Router history={history}>
        <LoadableApp />
    </Router>, document.getElementById('index')
);