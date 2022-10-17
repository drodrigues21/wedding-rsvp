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
               <button className="answer-btn-yes">Of course!</button>
               <button className="answer-btn-no">No I Can't</button>
            </div>
         </div>
      </div>
   );
}