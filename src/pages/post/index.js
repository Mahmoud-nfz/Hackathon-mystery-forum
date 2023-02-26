import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from "react";
import Posts from "../../components/homeSection/Posts";
import RightSideBar from "../../components/homeSection/RightSideBar";
import Modal from "../../components/Modal/Modal";
import AlertComp from "../../components/Alert";
import Bounce from 'react-reveal/Bounce';

import { BiUpvote, BiDownvote } from "react-icons/bi";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

import { BsFillChatLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";



function Post() {
  const [modalOpen, setModalOpen] = useState(false);
   const[success,setSuccess]=useState(false);

   const [active, isActive] = useState(false);
   const [like, setLike] = useState(false);
   const [dislike, setDislike] = useState(false);
   const [likeCount, setLikeCount] = useState(23);
   const [dislikeCount, setDislikeCount] = useState(0);
   const [animation, setAnimation] = useState(false);
   const [animation2, setAnimation2] = useState(false);
   const [activePostId, setActivePostId] = useState(null);
  
  
   const handlePostClick = (postId) => {
    setActivePostId(postId);
  //   setTimeout(() => setActivePostId(null), 200);
   };
  
   const toggleLike = (e) => {
    e.stopPropagation();
    if (like) {
     setLikeCount(likeCount - 1);
     setLike(false);
    } else {
     setLikeCount(likeCount + 1);
     setLike(true);
     if (dislike) {
      setDislike(false);
      setDislikeCount(dislikeCount - 1);
     }
    }
   };
   const toggleDislike = (e) => {
    e.stopPropagation();
    if (dislike) {
     setDislikeCount(dislikeCount - 1);
     setDislike(false);
    } else {
     setDislikeCount(dislikeCount + 1);
     setDislike(true);
     if (like) {
      setLike(false);
      setLikeCount(likeCount - 1);
     }
    }
   };

   const [pageContent, setPageContent] = useState(<>
    <span className="text-5xl">I</span>n a shocking turn of events, five journalists have mysteriously disappeared just days before the start of a highly anticipated trial case. The journalists, who were known for their investigative reporting, were expected to cover the trial of a high-profile businessman accused of embezzlement.

According to sources close to the journalists, they were last seen on Monday evening, leaving their office in a hurry. Their families and colleagues became worried when they failed to show up for work the next day and could not be reached on their phones.

The police were immediately notified, and an extensive search was launched to locate the missing journalists. However, despite their best efforts, there has been no sign of the journalists since their disappearance.

The only clue that the journalists left behind was a <a className="text-blue-500" href="http://localhost:5173"> mysterious website </a>, which appeared on the internet shortly after their disappearance. The website, which has a black background with white text, contains only a single message: "The truth will be revealed."

Many have speculated that the website may hold the key to the journalists' disappearance and that it may be linked to the trial case they were supposed to cover. However, the authorities have not commented on the website and have asked the public not to jump to conclusions.

The disappearance of these five journalists has sent shockwaves through the journalism community, and many have expressed their concern and fear for the safety of journalists who risk their lives to bring the truth to the public.

The investigation into the disappearance of the journalists is ongoing, and the police have asked anyone with information to come forward. As of now, the trial case is set to begin as scheduled, but the absence of the journalists has raised questions about the transparency of the trial and the safety of those who cover it.
    </>);

    const [bitcoin, setBitcoin] = useState("");
    
   
   document.cookie = `view_hidden=false;max-age=604800;domain=localhost`

   setInterval(() => {
    if (document.cookie.includes("view_hidden=true")) {
        setPageContent(<><span className="text-5xl">Secret</span>assdaasdasddsa  rd hdr hdrth dtrh rddr ttrdh d rdthtrd tr hrtd htr  drhtdhg drhtdhg ghjgfjsa
        dsasdadsadsdasbh hj gtrrtyy uiyu ytu tytyuhg gjgf gfvn ngffg dghdgh dfgfd nvbc nv vnc fhghj fjhg 
        hgfcgfng uyur truy yu hhjvk g hlj
        dasdsaasdsadsadds
        </>);
        setBitcoin(<Bounce left className="align-right">

        <img src={require('../../assets/test.webp')} className="mt-4 m-4 rounded-2xl h-[calc(17vw-32px)]  w-[calc(17vw-32px)]"></img>
        
        </Bounce>);
    }
    }, 1000);



  return (
    <>
      <Navbar />
      {success && <AlertComp setSuccess={setSuccess}/> }
      <div className="h-[100vh] w-full max-xl:w-[100vw] flex flex-row justify-around mr-[30%] ">
        <div className=" max-md:w-[90vw] max-md:left-[5vw]  w-[57vw] max-xl:w-[70vw] mr-[20%]  h-[100vh] absolute">
          
        <div
         key={2}
         onClick={() => handlePostClick(2)}
         onMouseEnter={() => setActivePostId(2)}
         onMouseLeave={() => setActivePostId(null)}
         className={` cursor-pointer
          ${activePostId === 2 ? "border-4 border-red-500" : ""
         }  mt-[20px] w-[96%] relative shadow-[0px_4px_10px_rgba(0,0,0,0.25)] rounded-xl p-2`}
     >



      <div className=" inline-block h-fit w-[calc(100%-17vw+32px)] px-4">
       <div className=" w-full h-full relative">
         <div className="w-[140%] flex flex-row text-2xl font-semibold font-sans text-[#777777]">
            <div className="mx-5">
                <img src={require('../../assets/missing.jpeg')} className="mt-4 m-4 rounded-2xl h-[calc(17vw-32px)]  w-[calc(17vw-32px)]"></img>
            </div>
            <div className="mx-5 items-center justify-center align-center my-auto">
                Journalists disappeared after witnessing in a case involving big names
            </div>
         </div>
        <div className="h-fit p-2">
         <button className="bg-gray-200 hover:bg-gray-300 text-bg-gray-400 hover:text-gray-600 rounded-full px-2 font-sans mx-2">
          Activism
         </button>
         <button className="bg-gray-200 hover:bg-gray-300 text-bg-gray-400 hover:text-gray-600 rounded-md px-2 font-sans mx-2">
          Journalism
         </button>
        </div>
        <div className="h-fit w-[130%] text-base text-[#777777] p-2">
            <span className="text-lg font-bold">
                A mysterious case involving a journalist and a lawyer has been placed on the minds of all people in Tunisia.
            </span>
            <br />
            {pageContent}
        </div>
        <div className="mt-4 h-fit   relative">
         <div className="bg-green-400 h-12 w-12 rounded-full  mt-1 mx-2 inline-block"></div>
         <div className="inline-block w-[calc(100%-192px)]  h-[100%] absolute">
          <div className="h-[50%] text-xs p-2 pb-0 text-[#777777]">
           Mahmoud Nefzi
          </div>
          <div className="h-[50%] text-xs p-2 pt-0 text-[#777777]">
           2 days ago
          </div>
         </div>
         {like ? (
             <>
                <span className="font-bold text-xl  text-[#02C8AC] top-5 right-[158px] absolute">
                  {likeCount}
                </span>
              <GoArrowUp
                  fill="#02C8AC"
                  className={`${
                      animation ? "likeAnimation" : ""
                  }  h-10 w-10 absolute top-3 right-[120px] hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]`}
                  onClick={(e) => {
                   toggleLike(e);
                   setAnimation(true);
                  }}
                  onAnimationEnd={() => {
                   setAnimation(false);
                  }}
              />
             </>
         ) : (
             <>
                <span className="font-bold text-xl  text-[#02C8AC] top-5 right-[158px] absolute">
                  {likeCount}
                </span>
              <BiUpvote
                  fill="#02C8AC"
                  className={`${
                      animation ? "likeAnimation" : ""
                  }  h-8 w-8 absolute top-4 right-[124px] hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]`}
                  onClick={(e) => {
                   toggleLike(e);
                   setAnimation(true);
                  }}
                  onAnimationEnd={() => {
                   setAnimation(false);
                  }}
              />
             </>
         )}
         {dislike ? (
             <>
                <span className="font-bold text-xl text-[#02C8AC] top-5 right-[94px] absolute">
                  {dislikeCount}
                </span>
              <GoArrowDown
                  fill="#02C8AC"
                  className={`${
                      animation2 ? "likeAnimation" : ""
                  } h-10 w-10 absolute top-3 right-[58px] hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]`}
                  onClick={(e) => {
                   toggleDislike(e);
                   setAnimation2(true);
                  }}
                  onAnimationEnd={() => {
                   setAnimation2(false);
                  }}
              />
             </>
         ) : (
             <>
                <span className="font-bold text-xl text-[#02C8AC] top-5 right-[94px] absolute">
                  {dislikeCount}
                </span>
              <BiDownvote
                  onClick={(e) => {
                   toggleDislike(e);
                   setAnimation2(true);
                  }}
                  onAnimationEnd={() => {
                   setAnimation2(false);
                  }}
                  fill="#02C8AC"
                  className={`${
                      animation2 ? "likeAnimation" : ""
                  } h-8 w-8 absolute top-4 right-[62px] hover:drop-shadow-[0_0_10px_rgba(0,255,0,1)]`}
              />
             </>
         )}
         <BsFillChatLeftFill
             fill="#02C8AC"
             className="h-6 w-6 absolute top-5 right-2 hover:drop-shadow-[0_0_5px_rgba(0,255,0,1)]"
         />
        </div>
       </div>
      </div>
     </div>
        </div>
        <RightSideBar />
        
        <div className="top-[460px] max-md:hidden max-xl:right-0 max-xl:w-[30vw] r w-[25vw] h-[calc(80vh+120px)] absolute right-[8vw] p-[15px]  no-scrollbar overflow-y-scroll">
            {bitcoin}
        </div>

        {modalOpen && <Modal setOpenModal={setModalOpen} setSuccess={setSuccess} mask="false" /> }
      </div>
    </>
  );
}

export default Post;
