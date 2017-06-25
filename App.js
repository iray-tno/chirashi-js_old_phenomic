import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { createApp } from '@phenomic/preset-react-app/lib/client';

import Home from './src/Home';
import BlogPostContainer from './src/BlogPostContainer';

export default createApp(() => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/blog/*" component={BlogPostContainer} collection="posts" />
        </Router>
    );
});
