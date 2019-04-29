import React, { Component } from 'react';



export default class Menu extends Component {
	render () {
		return(
			<>
			    <nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">Navbar</a>
				</nav>
				
				<div className="jumbotron">
  						<h1 className="display-4">Hello, world!</h1>
  						<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  					<hr className="my-4"/>
  						<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  						<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</div>

				<div className="row"> 
					<div className="col-md-6"> 
						<Card/> 
					</div> 
				</div>
			</>	
			)
	}
}