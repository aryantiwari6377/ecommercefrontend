// import React from 'react';
// import Slider from 'react-slick';
// import clothscat from '../images/clothscat2.jpg';
// import furniturecat from '../images/furniture.png';
// import electronicscat from '../images/electronicscat.jpg';
// import shoescat from '../images/shoescat.jpg';

// const PreviousArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} bg-gray-700 text-yellow rounded-full shadow-md`}
//     style={{ ...style, display: 'block', left: '-25px' }} // Position adjustment
//     onClick={onClick}
//   />
// );

// // Custom Next Arrow Component
// const NextArrow = ({ className, style, onClick }) => (
//   <div
//     className={`${className} bg-gray-700 text-yellow rounded-full shadow-md`}
//     style={{ ...style, display: 'block', right: '-25px' }} // Position adjustment
//     onClick={onClick}
//   />
// );

// const Gendercat = () => {
//   const settings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Infinite loop
//     speed: 500, // Transition speed
//     slidesToShow: 3, // Number of slides to show on desktop/tablet
//     slidesToScroll: 1, // Number of slides to scroll
//     autoplay: false, // Enable auto slide
//     autoplaySpeed: 3000, // Auto slide speed (3 seconds)
//     nextArrow: <NextArrow />, // Custom next arrow
//     prevArrow: <PreviousArrow />, // Custom previous arrrow
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet and below
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768, // Mobile and below
//         settings: {
//           slidesToShow: 1, // Show 1 slide on mobile
//         },
//       },
//     ],
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <Slider {...settings}>
//         <div className="p-4">
//           <div className="bg-green-100  h-48 flex items-center justify-center rounded-lg">
//             <img src={clothscat} className='h-full'/>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="bg-blue-100 h-48 flex items-center justify-center rounded-lg">
//            <img src={shoescat} className='h-full'/>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="bg-red-100 h-48 flex items-center justify-center rounded-lg">
//           <img src={furniturecat} className='h-full'/>
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="bg-yellow-100 h-48 flex items-center justify-center rounded-lg">
//            <img src={electronicscat} className='h-full'/>
//           </div>
//         </div>
     
//       </Slider>
//     </div>
//   );
// };

// export default Gendercat;
