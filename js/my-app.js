// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		{
		path: '/playlist/',
    	url: 'playlist.html',
    	name: 'playlist',
  		},

		
		{
		path: '/album/',
    	url: 'album.html',
    	name: 'album',
  		},
		
	
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		
		
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

