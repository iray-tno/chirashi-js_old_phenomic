// Hot loading HRM Patch
import 'react-hot-loader/patch';
// fetch polyfill
import 'whatwg-fetch';
import phenomicClient from 'phenomic/lib/client';

import mdHotUpdater from 'phenomic/lib/client/hot-md';

import metadata from '../src/metadata';
import routes from '../src/routes';
import store from '../src/store';

phenomicClient({ metadata, routes, store });

// md files processed via phenomic-loader to JSON & generate collection
let mdContext = require.context('../content', true, /\.(md|markdown)$/);
mdContext.keys().forEach(mdContext);

// hot loading
if (module.hot) {
  // hot load md
  module.hot.accept(mdContext.id, () => {
    mdContext = require.context('../content', true, /\.(md|markdown)$/);
    const requireUpdate = mdHotUpdater(mdContext, window.__COLLECTION__, store);
    mdContext.keys().forEach(requireUpdate);
  });

  // hot load app
  module.hot.accept(
    ['../src/metadata.js', '../src/routes.js', '../src/store.js'],
    () => phenomicClient({ metadata, routes, store }),
  );
}
