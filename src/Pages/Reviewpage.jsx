
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {submitreviewService, getWishlistService} from '../services/reviewPageService';

function ReviewComponent({ productId }) {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [ratingsPercentage, setRatingsPercentage] = useState([]);
    const [isClicked, setIsClicked] = useState(false);


    const handleRatingClick = (rate) => {
        setRating(rate);
    };

    const fetchReviews = async () => {
    
            const response = await getWishlistService(productId); 
          console.log("reviews",response);
         if(response.status === 200 && !response.data.message){
            // Use the fetched data appropriately
            const { reviews, ratingsPercentage, averageRating, totalReviews } = response.data;
            console.log("reviews:", reviews);
            console.log("ratingsPercentage:", ratingsPercentage);
            console.log("averageRating:", averageRating);
            console.log("totalReviews:", totalReviews);
            setReviews(reviews);
            setAverageRating(averageRating);
            setTotalReviews(totalReviews);
            setRatingsPercentage(ratingsPercentage || []);
       
    };
}

    const handleSubmitReview = async() => {

        const response = await submitreviewService( productId,rating);
    if(response.status === 201){
                console.log('Review submitted:', response.data);
                setIsClicked(true);
                fetchReviews();
    }
    };

    useEffect(() => {
        
        fetchReviews();
    }, [productId]);


    return (
        <div className='mt-10'>
            <h2 className='font-bold text-xl mb-10'>Customer Ratings</h2>

            <div className='flex flex-col md:flex-row justify-around'>

                <div>
                    <div className='flex ml-[25%] md:ml-[0%]'>
                        <span className='text-yellow-300 text-[46px]'> ★ </span>
                        <span className='text-yellow-300 text-[46px]'> ★ </span>
                        <span className='text-yellow-300 text-[46px]'> ★ </span>
                        <span className='text-yellow-300 text-[46px]'> ★ </span>
                        <span className='text-yellow-300 text-[46px]'> ★ </span>
                    </div>
                    <p>{totalReviews} customers rating</p>
                    <p>{averageRating.toFixed(1)} out of 5</p>
                </div>
                <div className='ml-[20%] mt-5 md:ml-[0%]'>
                    {[5, 4, 3, 2, 1].map((star, index) => (
                        <div key={star} className="flex items-center space-x-2">
                            <span>{star} star</span>
                            <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
                                <div
                                    className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
                                    style={{ width: `${ratingsPercentage[star - 1] || 0}%` }}
                                />
                            </div>
                            <span>  {ratingsPercentage[star - 1]
                                ? parseFloat(ratingsPercentage[star - 1].toFixed(2))
                                : 0
                            }%</span>
                        </div>
                    ))}

                </div>
            </div>



            <div className="mt-8 mb-4">
                <h3 className='font-bold text-xl mb-3'>Submit Your Rating</h3>
                <div className='ml-[4%]'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= rating ? 'text-yellow-300' : 'text-gray-300'}
                            onClick={() => handleRatingClick(star)}
                            style={{ fontSize: '46px', cursor: 'pointer' }}
                        >
                            ★
                        </span>
                    ))}
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '10px 10px',
                            borderRadius: '50%',
                            backgroundColor: isClicked ? 'green' : 'transparent',
                            color: isClicked ? 'white' : 'green',
                            cursor: 'pointer',
                            marginLeft: '10px'
                        }}
                        onClick={handleSubmitReview}
                    >
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '24px' }} />
                    </span>
                </div>
            </div>


        </div>
    );
}

export default ReviewComponent;

