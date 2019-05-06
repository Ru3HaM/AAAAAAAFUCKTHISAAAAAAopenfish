import React, { Component } from 'react';

export default class Menu extends Component {
	render () {
		return(
			<>
			    <nav className="navbar navbar-light bg-light">
				  <a className="navbar-brand" href="#">OpenFish</a>
				  <a className="navbar-support" target="_blank" href="https://vk.com/im?media=&sel=-174624372">Support</a>
				</nav>
				
				<div className="jumbotron">
  						<h1 className="display-4">Привет, рыбак!</h1>
  						<p className="lead">Здесь ты можешь найти рыбу мечты и посмотреть где она ловиться!</p>
  					<hr className="my-4"/>
  						<p>Здесь указанны рыбы которые можно поймать в лен области!</p>
				</div>

				<div className="row"> 
					<div className="col-md-6"> 
						<div class="card">
						  <div class="card-header">
						    Featured
						  </div>
						  <div class="card-body">
						    <h5 class="card-title">Special title treatment</h5>
						    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						    <a href="#" class="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
						<div class="card">
						  <div class="card-header">
						    Featured
						  </div>
						  <div class="card-body">
						    <h5 class="card-title">Special title treatment</h5>
						    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						    <a href="#" class="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
						<div class="card">
						  <div class="card-header">
						    Featured
						  </div>
						  <div class="card-body">
						  <p> {fishList} </p>
						    <h5 class="card-title">Special title treatment</h5>
						    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
						    <a href="#" class="btn btn-primary">Go somewhere</a>
						  </div>
						</div>
					</div> 
				</div>
			</>	
			)
	}
}