//  import React from 'react'
//  import '../Styles/Homeproducts.css'
//  import p1 from "../images/p1.jpg";
//  import p2 from "../images/p2.jpg";
//  import p3 from "../images/p3.jpg";
//  import p4 from "../images/p4.jpg";
//  import p5 from "../images/p5.jpg";
//  import p6 from "../images/p6.jpg";
//  import p7 from "../images/p7.jpg";
//  import { useNavigate } from 'react-router-dom';
//  function Homeproducts() {
//           const navigate = useNavigate();
//          const  allproductcat = () =>{
//                         navigate("/mobileandtablets");
//           }

     
//    return (
//      <div className="homepageproducts overflow-x-scroll">

           
       
          
//          <div className="homepageproduct" onClick={allproductcat}>
//              <div className="divimg"><img src={p1} class="homepageproductimg" /></div>
//              <div className="divp">
//                  <p>Mobiles & Tablets</p>
//              </div>
//          </div>
//          <div className="homepageproduct"  onClick={() =>{
//                         navigate("/tvs"); }}>
//              <div className="divimg"><img src={p2} class="homepageproductimg" /></div>
//              <div className="divp">
//                  <p>TVs & Appliances</p>
//              </div>
//          </div>
//          <div className="homepageproduct"  onClick={() =>{
//                         navigate("/fashion"); }}>
//              <div className="divimg"><img src={p3} class="homepageproductimg" /></div>
//             <div className="divp">
//                  <p>Fashion</p>
//              </div>
//         </div>
//          <div className="homepageproduct"  onClick={() =>{
//                         navigate("/beauty"); }}>
//              <div className="divimg"><img src={p4} class="homepageproductimg" /></div>
//             <div className="divp">
//                  <p>Beauty</p>
//             </div>
//          </div>
//          <div class="homepageproduct"  onClick={() =>{
//                         navigate("/furniture");  }}>
//             <div class="divimg"><img src={p5} class="homepageproductimg" /></div>
//              <div class="divp">
//                <p>Furniture</p>
//              </div>
//          </div>
//          <div class="homepageproduct"  onClick={() =>{
//                         navigate("/grocery"); }}>
//              <div class="divimg"><img src={p6} class="homepageproductimg" /></div>
//              <div class="divp">
//                  <p>Grocery</p>
//              </div>
//          </div>
//          <div class="homepageproduct"  onClick={() =>{
//                         navigate("/HomeKitchen"); }}>
//              <div class="divimg"><img src={p7} class="homepageproductimg" /></div>
//              <div class="divp">
//               <p>Home & Kitchen</p>
//              </div>
//          </div>
        
     
//      </div>
     
//    )
//  }

//  export default Homeproducts



import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Homeproducts.css';
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";

const productCategories = [
  { id: 'mobileandtablets', imgSrc: p1, label: 'Mobiles & Tablets' },
  { id: 'tvs', imgSrc: p2, label: 'TVs & Appliances' },
  { id: 'fashion', imgSrc: p3, label: 'Fashion' },
  { id: 'beauty', imgSrc: p4, label: 'Beauty' },
  { id: 'furniture', imgSrc: p5, label: 'Furniture' },
  { id: 'grocery', imgSrc: p6, label: 'Grocery' },
  { id: 'homekitchen', imgSrc: p7, label: 'Home & Kitchen' },
];

function Homeproducts() {
  const navigate = useNavigate();

  const handleNavigation = (categoryId) => {
    navigate(`/${categoryId}`);
  };

  return (
    <div className="homepageproducts overflow-x-scroll">
      {productCategories.map(({ id, imgSrc, label }) => (
        <div key={id} className="homepageproduct" onClick={() => handleNavigation(id)}>
          <div className="divimg">
            <img src={imgSrc} alt={label} className="homepage-product-img" />
          </div>
          <div className="divp">
            <p>{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Homeproducts;

