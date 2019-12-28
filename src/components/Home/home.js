import React, { Component } from 'react';
import './home.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import Header from '../Common/Header/header';
import NewPost from '../Common/Post/post';
import FAB from '../Common/FloatingButton/floatingButton'


import SmartphoneBanner1 from '../Ads/SmartphoneBanner1'
import Billiboard from '../Ads/Billiboard'
import HalfPageAd from '../Ads/HalfPageAd'
import Smartphonebanner2 from '../Ads/Smartphonebanner2'
import SuperLeaderboard from '../Ads/SuperLeaderboard';
import WideScraper from '../Ads/WideScraper'
import MediumRectangle from '../Ads/MediumRectangle'
import LeaderBoard from '../Ads/Leaderboard'



class Home extends Component{



   render(){


     return <div>

           <Header />

           <div className= 'c1'>
            <div className='container-fluid c38'>

            </div>

        <div className='container-fluid c4 text-center'>
                  <div className='row justify-content-center'>

         <div className='col-md-12 row justify-content-center container-fluid '>

        </div>


<div className='col-md-12 row justify-content-center'>

                  <div className='row justify-content-center col-md-1 c27'>

                  </div>



                      <div className='row justify-content-center col-md-8 c28'>


                      <div className='l1'>
                            <FAB className='l1'/>
                      </div>

                      <Slide bottom>
                      <NewPost
                      link='/Xiaomi-dominates-the-midrange-segment-with-k30!'
                      title='Xiaomi dominates the midrange segment with k30!'
                      imgsrc='../../img/blog26.jpg'
                      section='Mobiles' />
                      </Slide>

                      <Slide bottom>
                        <NewPost
                        link='/Twitter-Bans-APNG-Files'
                        title='Twitter Bans APNG Files'
                        imgsrc='../../img/blog24.jpg'
                        section='Leaks & Rumors' />
                      </Slide>


                      <Slide bottom>
                        <NewPost
                        link='/PUBG-To-Test-New-Motor-Glider-This-Weekend'
                        title='PUBG To Test New Motor Glider This Weekend '
                        imgsrc='../../img/blog25.jpg'
                        section='Games' />
                      </Slide>



                      <Slide bottom>
                        <NewPost
                        link='/Google-abandons-100000-chest-X-rays-release'
                        title='Google abandons 100,000 chest X-rays’ release'
                        imgsrc='../../img/blog23.jpg'
                        section='Leaks & Rumors' />
                      </Slide>

                      <Slide bottom>
                        <NewPost
                        link='/House-Of-Marley-Smile-Jamaica-EM-JE041-SB-in-ear'
                        title='House Of Marley Smile Jamaica EM-JE041-SB in-ear'
                        imgsrc='../../img/blog22.jpg'
                        section='Headphones & Earphones' />
                      </Slide>

                        <Slide bottom>
                          <NewPost
                          link='/Phones/REALME-5S-is-launching-on-November-20-2019-along-with-X2-pro'
                          title='REALME 5S is launching on November 20 2019 along with X2 pro!'
                          imgsrc='../../img/blog21.jpg'
                          section='Mobiles' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/HeadphoneEarphones/TOP-5-GAMING-HEADPHONES'
                          title='Top 5 Gaming Headphones'
                          imgsrc='../../img/blog20two.png'
                          section='Headphones' />
                      </Slide>

                      <Slide bottom>
                      <MediumRectangle />
                      </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/Phones/MI-Note-10-Dream-Big'
                          title='MI Note 10 “ Dream Big “'
                          imgsrc='../../img/blog19.png'
                          section='Mobiles' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/Qualcomm-Snapdragon-865-specs-leaked'
                          title='Qualcomm Snapdragon 865 specs leaked!!!'
                          imgsrc='../../img/blog18.jpg'
                          section='Leaks & Rumors' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/leaks-rumors/Google-announces-Project-Nightingale'
                          title='Google announces ‘Project Nightingale’'
                          imgsrc='../../img/blog17.jpg'
                          section='Leaks & Rumors' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='gaming-section/Redgear-Pro-Wireless-Gaming-Gamepad-“Best-Gaming-Controller-For-PC”'
                          title='Redgear Pro Wireless Gaming Gamepad “Best Gaming Controller For PC”'
                          imgsrc='../../img/blog16.jpg'
                          section='Games Section' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/leaksrumors/Apple-credit-card-under-investigation-for-discrimination'
                          title='Apple’s credit card under investigation for discrimination'
                          imgsrc='../../img/blog15.jpg'
                          section='Leaks & Rumors' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/gaming-section/GTA-6-LAUNCH-DATE'
                          title='GTA 6 launch date'
                          imgsrc='../../img/blog14.png'
                          section='Gaming Section' />
                        </Slide>

                       <Slide bottom>
                          <NewPost
                          link='/leaks-rumors/PUBG-Mobile-0.16.0-Update-could-bring-Erangle-2.0'
                          title='PUBG Mobile 0.16.0 Update could bring Erangle 2.0'
                          imgsrc='../../img/blog13.jpg'
                          section='Leaks & Rumors' />
                        </Slide>
 



               </div>
               <div className='row justify-content-center col-md-3 c27'>

             <WideScraper />
               </div>
  </div>

           </div>
           <LeaderBoard />
        </div>
        <footer className='shadow c6 c10 text-center container-fluid'>
        <Link to='/about-us'>
         <button className='btn c35'>About Us</button>
        </Link>

         <Link to='/contact-us'>
         <button className='btn c35'>Contact Us</button>
        </Link>

        <Link to='/privacy-policy'>
        <button className='btn c35'>Privacy Policy</button>
       </Link>


        </footer>
        </div>


  </div>
   }
}
export default Home;
