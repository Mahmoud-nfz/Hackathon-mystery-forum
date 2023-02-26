import Navbar from "../../components/Navbar/Navbar";
import React, { useState } from "react";
import Posts from "../../components/homeSection/Posts";
import RightSideBar from "../../components/homeSection/RightSideBar";
import Modal from "../../components/Modal/Modal";
import AlertComp from "../../components/Alert";

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
    <span className="text-5xl">M</span>assdaasdasddsa  rd hdr hdrth dtrh rddr ttrdh d rdthtrd tr hrtd htr  drhtdhg drhtdhg ghjgfjsa
    dsasdadsadsdasbh hj gtrrtyy uiyu ytu tytyuhg gjgf gfvn ngffg dghdgh dfgfd nvbc nv vnc fhghj fjhg 
    hgfcgfng uyur truy yu hhjvk g hlj
    dasdsaasdsadsadds
    </>);
   
   document.cookie = `view_hidden=false;max-age=604800;domain=localhost`

   setInterval(() => {
    if (document.cookie.includes("view_hidden=true")) {
        setPageContent(<><span className="text-5xl">Secret</span>assdaasdasddsa  rd hdr hdrth dtrh rddr ttrdh d rdthtrd tr hrtd htr  drhtdhg drhtdhg ghjgfjsa
        dsasdadsadsdasbh hj gtrrtyy uiyu ytu tytyuhg gjgf gfvn ngffg dghdgh dfgfd nvbc nv vnc fhghj fjhg 
        hgfcgfng uyur truy yu hhjvk g hlj
        dasdsaasdsadsadds
        </>);
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
            A mysterious case involving a journalist and a lawyer has been placed on the minds of all people in Tunisia.
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
        {modalOpen && <Modal setOpenModal={setModalOpen} setSuccess={setSuccess} mask="false" /> }
      </div>
    </>
  );
}

export default Post;
