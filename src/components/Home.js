import { Link } from "react-router-dom";
 import './home.css';

export default function Home() {
   return (
      <div className="main-container">
         <div className="title-container">
            <h1 className="title">You are Invited!</h1>
         </div>

         <div className="save-the-date-container">
            <div className="save-the-date">
               <p className="date">15.April.2023</p>
               <p className="save">Save the date!</p>
            </div>
         </div>

         <div className="rsvp-container">
            <div className="question">
               <p>Can you come to our wedding?</p>
            </div>
            <div className="answer-btns-container">
               <button className="answer-btn-yes">
                  <Link to="/Name ">Of course!</Link>
               </button>
               <button className="answer-btn-no">
                  <Link to="/SorryMessege">No thanks!</Link>
               </button>
            </div>
         </div>

         <div className="location-contrainer maps-guests-btn">
            <div className="location-header">
               <svg width="25" height="20" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4_82)">
                  <path d="M10.125 3.35999C9.52687 3.35999 8.94218 3.52801 8.44486 3.84282C7.94754 4.15764 7.55992 4.60509 7.33103 5.1286C7.10214 5.65211 7.04225 6.22816 7.15894 6.78392C7.27563 7.33967 7.56365 7.85017 7.98659 8.25085C8.40953 8.65152 8.94838 8.92439 9.53501 9.03494C10.1216 9.14548 10.7297 9.08875 11.2823 8.8719C11.8349 8.65506 12.3072 8.28784 12.6395 7.81669C12.9718 7.34555 13.1492 6.79163 13.1492 6.22499C13.1492 5.46514 12.8305 4.73642 12.2634 4.19912C11.6963 3.66183 10.9271 3.35999 10.125 3.35999ZM10.125 8.08999C9.73564 8.08999 9.35503 7.98061 9.0313 7.77568C8.70756 7.57075 8.45524 7.27947 8.30624 6.93869C8.15724 6.59791 8.11825 6.22292 8.19421 5.86114C8.27017 5.49937 8.45766 5.16706 8.73298 4.90623C9.0083 4.64541 9.35907 4.46778 9.74094 4.39582C10.1228 4.32386 10.5186 4.36079 10.8784 4.50195C11.2381 4.64311 11.5455 4.88215 11.7618 5.18885C11.9782 5.49554 12.0936 5.85612 12.0936 6.22499C12.0922 6.71875 11.8842 7.19183 11.5152 7.54051C11.1461 7.88918 10.6462 8.08499 10.125 8.08499V8.08999Z"/>
                  <path d="M10.125 1C8.48108 1.0013 6.90449 1.61884 5.73959 2.71775C4.57469 3.81665 3.91614 5.30762 3.90778 6.865C3.90778 9.2 5.29055 11.155 6.30389 12.58L6.48861 12.84C7.49681 14.2243 8.57838 15.5594 9.72917 16.84L10.1303 17.285L10.5314 16.84C11.682 15.5592 12.7636 14.2242 13.7719 12.84L13.9567 12.575C14.9647 11.15 16.3475 9.2 16.3475 6.865C16.3391 5.30675 15.6799 3.81503 14.5138 2.71599C13.3478 1.61694 11.7698 0.99998 10.125 1ZM13.0753 12L12.8853 12.265C11.9775 13.555 10.7742 15 10.125 15.715C9.50222 15 8.2725 13.555 7.36472 12.265L7.18 12C6.24583 10.68 4.96333 8.875 4.96333 6.845C4.96333 6.20284 5.09684 5.56696 5.35624 4.97368C5.61564 4.3804 5.99584 3.84133 6.47515 3.38725C6.95445 2.93317 7.52347 2.57297 8.14971 2.32723C8.77596 2.08148 9.44716 1.955 10.125 1.955C10.8028 1.955 11.474 2.08148 12.1003 2.32723C12.7265 2.57297 13.2955 2.93317 13.7748 3.38725C14.2542 3.84133 14.6344 4.3804 14.8938 4.97368C15.1532 5.56696 15.2867 6.20284 15.2867 6.845C15.2867 8.895 14.0094 10.7 13.0753 12Z"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_4_82">
                  <rect width="19" height="18" fill="white" transform="translate(0.625)"/>
                  </clipPath>
                  </defs>
               </svg>
               <h2>Location</h2>
            </div>
            <div className="location-address">
               <p>1102, Cheonho-daero, Gangdong-gu, <span>Seoul, Republic of Korea</span></p>
            </div>
            <div className="location-map">
               <button>
                  <Link className="link" to="/Location">See on google maps	&#62;</Link>
               </button>
            </div>
         </div>

         <div className="guess-list-container maps-guests-btn">
            <h2>Guess List</h2>
            <button>
               <Link className="link" to="/Guess">Check who's coming &#62;</Link>
            </button>
         </div>
      </div>
   );
}