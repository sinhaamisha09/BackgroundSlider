import React from 'react';
import './navigation.styles.css';

const Navigation = () => {
	return (
		<div className='navigation'>
			<nav id='navBar' className='menu-item' >
				<div className='' id='nav' >
					<a className='menu' href="#" id="navHome" title="Home"> HOME </a>
					<a className='menu' href="#" id="navPortfolio" title="Portfolio"> PORTFOLIO </a>
					<a className='menu' href="#" id="navGallery" title="Gallery"> GALLERY </a>
					<a className='menu' href="#" id="navAbout" title="About"> ABOUT </a>
					<a className='menu' href="#" id="navBlog" title="Blog"> BLOG </a>
					<a className='menu' href="#" id="navContact" title="Contact"> CONTACT </a>
					<a className='menu' href="#" id="navBuyNow" title="Buy Now"> BUY NOW </a>
				</div>
			</nav>
		</div>
	);
} 
export default Navigation;
