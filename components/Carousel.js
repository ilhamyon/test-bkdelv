import React from "react";
//These are Third party packages for smooth slideshow
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Carousel = () => {
	//Array of Images
	const images = [
		"assets/images/slide1.jpg",
		"assets/images/slide2.jpg",
		"assets/images/slide3.jpg",
		"assets/images/slide4.jpg",
		"assets/images/slide5.jpg",
	];

	//These are custom properties for zoom effect while slide-show
	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" style={{ width: "40px", marginRight: "-40px", cursor: "pointer" }}>
				<svg 
					aria-hidden="true" 
					class="w-5 h-5 text-orange-600 sm:w-6 sm:h-6 dark:text-orange-600" 
					fill="none" 
					stroke="currentColor" 
					viewBox="0 0 24 24" 
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
			</div>
		),
		nextArrow: (
			<div className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none" style={{ width: "40px", marginLeft: "-40px", cursor: "pointer" }}>
				<svg 
				aria-hidden="true" 
				class="w-5 h-5 text-orange-600 sm:w-6 sm:h-6 dark:text-orange-600" 
				fill="none" 
				stroke="currentColor" 
				viewBox="0 0 24 24" 
				xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
			</div>
		),
	};
	return (
		<div className="m-full">
			{/* <h1 className="text-center text-6xl  font-bold pb-10 ">
				Responsive Next.js <span className="text-indigo-600">Image Slider</span>
			</h1> */}

			<Zoom {...zoomInProperties}>
				{images.map((each, index) => (
					<div key={index} className="flex justify-center w-full h-full">
						<img
							className="w-full object-cover shadow-xl"
							src={each}
						/>
					</div>
				))}
			</Zoom>
		</div>
	);
};

export default Carousel;