/*!
 * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
 * Copyright 2017.
 * Licensed under the GPL license
 */

$( document ).ready( function () {
    $( '.dropdown-menu a.dropdown-toggle' ).on( 'click', function ( e ) {
        var $el = $( this );
        $el.toggleClass('active-dropdown');
        var $parent = $( this ).offsetParent( ".dropdown-menu" );
        if ( !$( this ).next().hasClass( 'show' ) ) {
            $( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
        }
        var $subMenu = $( this ).next( ".dropdown-menu" );
        $subMenu.toggleClass( 'show' );
        
        $( this ).parent( "li" ).toggleClass( 'show' );

        $( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
            $( '.dropdown-menu .show' ).removeClass( "show" );
            $el.removeClass('active-dropdown');
        } );
        
         if ( !$parent.parent().hasClass( 'navbar-nav' ) ) {
            $el.next().css( { "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 } );
        }

        return false;
    } );
} );

// Next 6 are for sticky footer
document.createElement('header');
document.createElement('footer');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');

function addNewBadge() {
	var newItems = document.querySelectorAll("[data-modified-date]");
	var today = new Date();
	
	if (newItems.length > 0) {
		for(let i = 0; i < newItems.length; i++) {
			let itemDate = Date.parse(newItems[i].getAttribute("data-modified-date"));
			let seconds = Math.abs(today - itemDate) / 1000;
			let days = Math.floor(seconds / (60 * 60 * 24));			
			if (days <= 30) {doAddNewBadge(newItems[i]);}
		}
	}
}

function doAddNewBadge(nodeSource) {
	var newElement = document.createElement("span");
	newElement.innerHTML = "NEW";
	newElement.className += "badge badge-success";
	nodeSource.appendChild(newElement);;
}