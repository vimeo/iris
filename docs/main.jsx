import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import { MainLayout, StyleListing }  from 'vimeo-styleguide';
import MainLayout from '../node_modules/vimeo-styleguide/components/layouts/layoutWrappers/MainLayout.jsx';
import StyleListing  from '../node_modules/vimeo-styleguide/components/layouts/styles/StyleListing.jsx';
let App = function App() {

	return (
		<div>
				<Router history={browserHistory}>
					<Route path="/" component={MainLayout}>
						<IndexRoute component={StyleListing} />
			    </Route>
			  </Router>
		</div>
	)
};


ReactDOM.render(
	<App />,
	document.getElementById('app-root')
);
