import React from 'react'
import './SingleCourse.scss'
const testimg1 = require('../../asset/test3.jpg')

export function SingleCourseComp () {

  let isAdded = false;
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    var cardheader = document.querySelector(".course_landing");

    if (scrollPosition > 300 && !isAdded) {
          cardheader.classList.add("skicky");
      isAdded = true;
    } else if (scrollPosition <= 300 && isAdded) {
      cardheader.classList.remove("skicky");
      isAdded = false;
    }
  });
  return (
    <>
      <div style={{paddingTop:70}}>
        <div className='course_landing'>
          <div className='course_landing_bg'>
            <div className='container top-container'>
              <div className='course_landing_details'>
                <div className='course_landing_title'>
                  <h1>MERN Stack Course 2023 - MongoDB, Express, React and NodeJS</h1>
                </div>
                <div className='course_landing_desc'>
                  <p>Build Full Stack Application from Scratch with MongoDB, Express, React and NodeJS</p>
                </div>
                <div className='course_landing_instructor'>
                  <p>Created by <a href='/'>Jetha</a></p>
                </div>
                <div className='course_landing_meta'>
                  <div className='course_landing_meta_date'>
                    <i class="fa-solid fa-calendar-days"></i>
                    <p>Last updated 12/2022</p>
                  </div>
                  <div className='course_landing_meta_lang'>
                    <i class="fa-solid fa-globe"></i>
                    <p>English</p>
                  </div>
                </div>
            </div>


            <div className='course_landing_card'>
              <div className='course_landing_card_video'>
                <img src={testimg1}/>
              </div>
              <div className='course_landing_card_price'>
                <p>₹ 3200</p>
              </div>
              <div className='course_landing_card_btn'>
                <button className='add_cart'>Add To Cart</button>
                <button className='wishlist'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="bevel"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>
              </div>
              <div className='course_landing_card_moneyreturn'>
                <p>30-Day Money-Back Guarantee</p>
              </div>
              <div className='course_landing_card_lifetime'>
                <p>Full Lifetime Access</p>
              </div>
            </div>
            </div>
          </div>

          <div className='course_landing_body'>
            <div className='course_landing_body_card'>
              <div className='course_landing_body_card_title'>
                <h6>What you'll learn</h6>
              </div>
              <div className='course_landing_body_card_items'>
                <ul>
                  <li className='course_landing_body_card_item'>
                    <i class="fa-solid fa-check"></i>
                    <p>Learn how to build big full stack app from scratch</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i class="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i class="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                  <li className='course_landing_body_card_item'>
                    <i class="fa-solid fa-check"></i>
                    <p>Learn how to implement React Hooks, Async/Await, React Router 6, Axios</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className='course_landing_body_desc'>
            <div className='course_landing_body_desc_title'>
              <h6>Description</h6>
            </div>
            <div className='course_landing_body_desc_body'>
              <p>What's up everybody, this is John from Coding Addict and welcome to my MERN Stack course . During the course we will build full stack application (Jobify) from scratch, using MongoDB, Express, React and Node.js</p>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}