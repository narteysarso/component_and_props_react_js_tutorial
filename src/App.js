import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
	<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100vh', padding:0}}>
	    {/* navbar */}
	    <div style={{width: '100%', backgroundColor: 'pink'}}>
	    	<h3>nav bar</h3>
	    </div>
	    
	    {/* banner */}
	    <div style={{width: '100%', height: '25vh', backgroundColor: 'pink'}}>
	    	<h3>banner / carousel</h3>
	    </div>

	    {/* thumbnails */}	      
	    <div style={{display: 'flex', width:'100%', height:'50vh', flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'space-evenly'}}>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 1</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 2</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 3</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 4</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 5</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 6</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 7</h3>
	      	</div>
	      	<div style={{width: '24vw', height: '20vh', backgroundColor: 'pink'}}>
	      		<h3>thumbnail 8</h3>
	      	</div>	
	    </div>

  		{/* footer */}
      	<div style={{width: '100%', height: '8vh', backgroundColor: 'pink'}}>
      		<h3>footer</h3>
      	</div>

    </div>
  );
}

export default App;