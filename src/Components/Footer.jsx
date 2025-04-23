
import React, { useState } from 'react';
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";

function Footer() {
    const [choosequeopen, setChoosequeopen] = useState(false);
    const [more, setMore] = useState(false);
    const [popcatqueopen, setPopcatqueopen] = useState(false);
    const [morepopcat, setMorepop] = useState(false);

    const istogglechoose = () => {
        setChoosequeopen(!choosequeopen);
    };

    const ismorechoose = () => {
        setMore(!more);
    };
    const istogglepopcat = () => {
        setPopcatqueopen(!popcatqueopen);
    }
    const ismorepopcat = () => {
        setMorepop(!morepopcat);
    }

   
    
    const productCategories = [
      { id: 'mobileandtablets', imgSrc: p1, label: 'Mobiles & Tablets' },
      { id: 'tvs', imgSrc: p2, label: 'TVs & Appliances' },
      { id: 'fashion', imgSrc: p3, label: 'Fashion' },
      { id: 'beauty', imgSrc: p4, label: 'Beauty' },
      { id: 'furniture', imgSrc: p5, label: 'Furniture' },
      { id: 'grocery', imgSrc: p6, label: 'Grocery' },
      { id: 'homekitchen', imgSrc: p7, label: 'Home & Kitchen' },
    ];

    return (
        <div className="bg-black p-8 mt-10">
            <div className="flex flex-col gap-8 md:flex-row justify-around text-white mb-8 text-sm font-bold">
                <div className="text-start ">
                    <div className="text-yellow-300 text-xl font-bold mb-4">NEED HELP</div>
                    <p><a>Contact Us</a></p>
                    <p><a>Track Order</a></p>
                    <p><a href="/return&refund">Return & Refund</a></p>
                    <p><a href="/faq">FAQ's</a></p>
                    <p><a>Career</a></p>
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">COMPANY</div>
                    <p><a>About Us</a></p>
                  
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">MORE INFORMATION</div>
                    <p><a href="/termcondition">Terms & Conditions</a></p>
                    <p><a href="/privacypolicy">Privacy Policy</a></p>
                    <p><a href="shipping">Shipping Policy</a></p>
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">CONTACT US</div>
                    <p><a>aryansjpr2@gmail.com</a></p>
                    
                    <p><a>Jaipur, India</a></p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center w-full text-yellow-300 cursor-pointer font-bold text-xl h-[60px]" >
                    <h1>WHY CHOOSE US ?</h1>
                    <span className='text-2xl' onClick={istogglechoose}>{choosequeopen ? '-' : '+'}</span>
                </div>
                {choosequeopen && (
                    <div className="text-white mt-4">
                        <p>
                        At Beyoung, we don’t just sell products – we deliver trust. Our mission is to provide customers with the highest quality goods at the most affordable prices, all backed by seamless customer service.
                            {!more && '...'}
                        </p>
                        {more && (
                            <p>
                               Our user-first philosophy, easy returns, lightning-fast delivery, and secure payments make us a go-to destination for online shoppers. Plus, our collections are curated to match today’s fast-moving trends so you’ll always stay ahead. With thousands of happy customers and counting, we believe in creating experiences – not just sales.
                            </p>
                        )}
                        <button className="text-green-500 mt-2" onClick={ismorechoose}>
                            {more ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                )}
            </div>


            <div className="w-full">
                <div className="flex justify-between items-center w-full text-yellow-300 cursor-pointer font-bold text-xl" >
                    <h1>POPULAR CATEGORIES</h1>
                    <span className='text-2xl' onClick={istogglepopcat}>{popcatqueopen ? '-' : '+'}</span>
                </div>
                {popcatqueopen && (
                    <div className="text-white mt-4">
                        <p>
                        We offer a wide range of popular categories to cater to all your needs. From the latest smartphones to stylish fashion pieces — find everything in one place!
                            {!morepopcat && '...'}
                        </p>
                        {morepopcat && (
                            <div className="grid grid-cols-2 gap-4 mt-4">
                            {productCategories.map((item) => (
                              <div key={item.id} className="flex items-center space-x-3">
                                <img src={item.imgSrc} alt={item.label} className="w-10 h-10 object-cover rounded" />
                                <span>{item.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <button className="text-green-500 mt-2" onClick={ismorepopcat}>
                            {morepopcat ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Footer;
