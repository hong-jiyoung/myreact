// import "./Project.css";
// import React, { useState } from "react";
// import React from 'react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

// // Swiper 컴포넌트에서 사용할 SwiperCore 모듈들을 추가합니다.
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// export function Project() {
//   return(
//   <>
//     <h1 className="main">Style STORY</h1>

// <ul className="dropdown">
//   <li>
//     <a href="https://shop.29cm.co.kr/best-items?category_large_code=268100100"> BEST5 </a>

//     <ul className="submenu">
//       <li><a href="#">TOP</a></li>
//       <li><a href="#">BOTTOM</a></li>
//       <li><a href="#">ONE-PIECE</a></li>
//       <li><a href="#">SHOES</a></li>
//     </ul>

//   </li>

//   <li>
//     <a href="https://shop.29cm.co.kr/best-items?category_large_code=271100100"> accersory </a>
//     <ul className="submenu">
//       <li><a href="#">earing</a></li>
//       <li><a href="#">shoe</a></li>
//       <li><a href="#">bag</a></li>
//       <li><a href="#">watch</a></li>
//     </ul>

//   </li>

//   <li>
//     <a
//       href="https://www.29cm.co.kr/shop/category/list?category_large_code=268100100&category_medium_code=268102100&sort=">
//       outer </a>
//     <ul className="submenu">
//       <li><a href="#">jacket</a></li>
//       <li><a href="#">coat</a></li>
//       <li><a href="#">padding</a></li>
//       <li><a href="#">cardigon</a></li>
//     </ul>

//   </li>

//   <li>
//     <a
//       href="https://www.29cm.co.kr/shop/category/list?category_large_code=266100100&category_medium_code=&sort=latest">
//       BEAUTY </a>
//     <ul className="submenu">
//       <li><a href="#">TOP</a></li>
//       <li><a href="#">BOTTOM</a></li>
//       <li><a href="#">ONE-PIECE</a></li>
//       <li><a href="#">SHOES</a></li>
//     </ul>

//   </li>

//   <li>
//     <a href="https://auth.29cm.co.kr/login?redirect_uri=https%3A%2F%2Fwww.29cm.co.kr%2Fmypage%2F">MY PAGE</a>
//   </li>
// </ul>

// <div className="login">
// <h1>LOGIN</h1>
//     <div className="login-id">
// ID <input type="text" name="id" placeholder="아이디를 입력해주세요."><br/></input>
// </div>
// PASSWORD
// <div className="login-pw">
// <input type="password" name="password" placeholder="비밀번호를 입력해주세요."></input>
// </div>
// <p>
//   <input value="LOGIN" type="submit" name="login"></input>
// </p>
// </div>

// {/* function MySwiper() {
//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 3000 }}
//     >
//       <SwiperSlide>
//         {/* 첫 번째 슬라이드 컨텐츠 */}
//         <img src="slide1.jpg" alt="Slide 1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         {/* 두 번째 슬라이드 컨텐츠 */}
//         <img src="slide2.jpg" alt="Slide 2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         {/* 세 번째 슬라이드 컨텐츠 */}
//         <img src="slide3.jpg" alt="Slide 3" />
//       </SwiperSlide>
//     </Swiper>
//   );
// }

// export default MySwiper; */}

// <div className="slide-container">
//   <div className="myslide">
//     <div className="myslide-fade">
// <img className="main-img" src="https://image.wconcept.co.kr/images/builder/1/4/15/282/5.ouie_20230908152702.jpg?RS=900"></img>
//     </div>

//       <div className="myslide-fade">
// <a href="https://www.beginning.kr/m/product_list.html?xcode=125&type=Y"><img className="main-img" src="https://beginning1.img10.kr//begin/r/begin/230911/main_pc1.jpg"></img></a>
//     </div>

//       <div className="myslide-fade">
// <img className="main-img" src="https://beginning1.img10.kr/begin/r/begin/230911/main_pc5.jpg"></img>
//     </div>

//       <div className="myslide-fade">
// <img className="main-img" src="https://beginning1.img10.kr/begin/r/begin/230911/main_pc3.jpg"></img>
//     </div>
//   </div>
// </div>
// <video className="player" width="1000" height="500" controls autoplay loop
//   src="https://player.vimeo.com/external/530349505.sd.mp4?s=c62984ed2c371382bd4ee3b7087d2bba5dc9e646&profile_id=164&oauth2_token_id=57447761">
// </video>

// function App() {
//   useEffect(() => {
//     const swiper = new Swiper('.swiper', {
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     });

//     return () => {
//       swiper.destroy();
//     };
//   }, []);

//   return (
//     <div className="swiper-container">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">
//           <figure>
//             <img className="image" src="https://product-image.wconcept.co.kr/productimg/image/img1/31/303426531_HC36772.jpg?RS=384" alt="Product 1" />
//           </figure>
//           <p>450,000₩</p>
//         </div>
//         <div className="swiper-slide">
//           <figure>
//             <img className="image" src="https://product-image.wconcept.co.kr/productimg/image/img1/86/303582486_GG11073.jpg?RS=384" alt="Product 2" />
//           </figure>
//           <p>50,000₩</p>
//         </div>
//         <div className="swiper-slide">
//           <figure>
//             <img className="image" src="https://product-image.wconcept.co.kr/productimg/image/img1/91/301729591.jpg?RS=384" alt="Product 3" />
//           </figure>
//           <p>35,000₩</p>
//         </div>
//         <div className="swiper-slide">
//           <figure>
//             <img className="image" src="https://product-image.wconcept.co.kr/productimg/image/img1/77/303665677_QX22199.jpg?RS=384" alt="Product 4" />
//           </figure>
//           <p>150,000₩</p>
//         </div>
//       </div>

//       <div className="swiper-pagination"></div>
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//       <div className="swiper-scrollbar"></div>
//     </div>

// <div className="grid-container">
//   <span>
//     <h1>TOAMOTT</h1>
//     <P>투아모트는 컨템퍼러리 기반 여성복 브랜드입니다.<br> 일상의 소중한 순간을 아름다운 색과 실루엣으로 남길 수 있도록,<br> 좋은 소재와 숙련된 기술로 가치 있는 제품들을 선보입니다.</P>
//     <a href="https://shop.29cm.co.kr/lookbook/21444">

//       <img src="https://img.29cm.co.kr/next-lookbook/2023/09/12/723ab917f34a42c3b95be472a98eb197_20230912102251.jpg"></img>
//     </a>

//   </span>

//   <h1>toamott. 2023 FW</h1>
// <p>' Autumn Palette ' 투아모트의 23 Fall 컬렉션은 가을의 깊은 <br>분위기가 느껴지는 다채롭고 부드러운 색감들로 채웠습니다. </p>
// </div>

//   <div className="grid-content">
//     <span> <a href="https://content.29cm.co.kr/brand-news/12716?product_sort=best">
//         <img src="https://img.29cm.co.kr/cm/202309/11ee4e247cd8dc59a5b3135139818d95.jpg?width=500"></img></a>

//       <h2>패션위크가 돌아왔어요</h2>
//       <p><br>23Fall 시즌 발매를 알리는 29cm 우먼 패션위크가 </br>돌아왔어요.마뗑킴의 뉴트럴한 가을도 만나보세요.</p>
//     </span>
//     <span>
//       <a href="https://content.29cm.co.kr/showcase/441">
//         <img src="https://img.29cm.co.kr/cm/202309/11ee50478bdcaf6583bca7ae1b5f6fd2.jpg?width=500"></img></a>
//       <h2>덜어내며 본질에 가까워지는</h2>
//       <p>미니멀리즘을 추구하는 유스는 'with less'라는 슬로건을 바탕으로 어패럴 디자인, 비주얼 콘텐츠 등 다양한 아카이브를 쌓아가고 있습니다. 반복적인 덜어냄의 과정에서 본질에 가까워지는 유스의
//         새로운 컬렉션을 소개합니다.</p>
//     </span>

//     <span> <a href="https://content.29cm.co.kr/brand-news/12716?product_sort=best"><img
//           src="https://img.29cm.co.kr/cm/202309/11ee4acd5d22d91f8a693fd588215386.jpg?width=500"></img></a>

//       <h2>브랜드의 모든 소식</h2>
//       <p> 디자이너와 패션 브랜드는 각 시즌마다 새로운 컬렉션을 관리하고 패션 쇼를 개최하여 소비자와 패션 업계에 제품을 소개합니다. </p>
//     </span>
//     <span>
//       <a href="https://content.29cm.co.kr/showcase/441">
//         <img
//           src="https://img.29cm.co.kr/next-contents/2023/09/08/89ca099504b9405fb25b5387c983b551_20230908162539.jpg?width=1000"></img></a>
//       <h2>오늘의 스페셜 오더</h2>
//       <p>패션 시즌은 소비자의 의복 구매 및 스타일 선택에 영향을 미치고, 패션 브랜드와 디자이너에게 경제적으로 중요한 역할을 합니다.</p>
//     </span>

//     <span> <a href="https://content.29cm.co.kr/brand-news/12512?product_sort=best"><img
//           src="https://img.29cm.co.kr/cms/202309/11ee505ed6472a79a5b3af83bfd96f0a.png?width=500"></img></a>

//       <h2>고요한 우아함이 돋보이는 가을</h2>
//       <p> 이 시즌은 일반적으로 봄/여름과/겨울로 나누어서, 디자이너와 패션 브랜드는 각 시즌마다 새로운 컬렉션을 관리하고 패션 쇼를 개최하여 제품을 소개합니다.</p>
//     </span>
//     <span>
//       <a href="https://content.29cm.co.kr/brand-news/12526?product_sort=best">
//         <img src="https://img.29cm.co.kr/cms/202309/11ee4c98ee2731e383bc272ba0042d54.jpeg?width=500"></img></a>
//       <h2>감각적인 향으로 힐링 리추얼</h2>
//       <p>컬렉션은 향수 브랜드나 제조사가 다양한 향기를 고객에게 제공하는 방법 중 하나입니다. </p>
//     </span>

//   </div>

// <div className="grid-shop">
//   <figure>
//     <img src="https://img.29cm.co.kr/next-lookbook/2023/09/12/b435f41d754f4b76b12fd217dd4d1fc9_20230912102503.jpg"></img>

//   <a href="https://product.29cm.co.kr/catalog/2229786">classNameic Overshirt - Black</a>
//       </figure>
//   <figure>
//     <img src="https://img.29cm.co.kr/next-lookbook/2023/09/12/e9a6916249304dd8bc90bf1076e46bb4_20230912103845.jpg"></img>

//   <a href="https://product.29cm.co.kr/catalog/2229758">Grace Pleats Blouse - Pink</a>
// </figure>
// <span>
//    <figure>
//     <img src="https://img.29cm.co.kr/next-lookbook/2023/09/12/8222e1391c094eb0bfff7fae429784b2_20230912104346.jpg"></img>

//   <a href="https://product.29cm.co.kr/catalog/2229714">Wool 100% Le Jacket - Black</a>
// </figure>
// </span>
// </div>

//    <div className="footer">
//   <p>고객센터 <br>1644-0000</br></p>
// </div>

//   </>
//   );
// }
