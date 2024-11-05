// cimport logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {

  let monthsArr = ["January","Febravary","March","April","May","June","July","August","September","October","November","December"]
  let daysArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

 // let birthday = new Date(2003,11,3,0,20,22,222);

// let birthday = new Date(14358787879)

 // let birthday = new Date("04 nov 2021")

//let birthday = new Date();

//console.log(birthday)
 // console.log(birthday.getFullYear());
 // console.log(monthsArr[birthday.getMonth()]);
  // console.log(daysArr[birthday.getDay()]);
 // console.log(birthday.getDate());
 // console.log(birthday.getHours());
  // console.log(birthday.getMinutes());
  // console.log(birthday.getMilliseconds());
  // console.log(birthday.getTime());
  


  return (
    <div className="App">


      <h1>Learning  Date classes</h1>
      <form>
        <div>
          <label>leaving on village</label>
          <input type='datetime-Local' onChange={(eo)=>{
            let selectedDate = new Date(eo.target.value);
           console.log (moment(selectedDate).subtract(6, 'days').calendar());
          //  console.log(selectedDate.setFullYear(1586))
            console.log(selectedDate.getFullYear());
            console.log(monthsArr[selectedDate.getMonth()]);
            console.log(daysArr[selectedDate.getDay()]);
            console.log(selectedDate.getDate());
            console.log(selectedDate.getHours());
            console.log(selectedDate.getMinutes());
            console.log(selectedDate.getMilliseconds());
            console.log(selectedDate.getTime());


            let styingDuration = 70*24*60*60*1000;

            let leavingEndDateinMs = selectedDate.getTime()+styingDuration;


            let leavingEndDate = new Date(leavingEndDateinMs);
           console.log(leavingEndDate);
          }}></input>
        </div>
      </form>
      <button type='button' onClick={()=>{
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
        console.log(moment().format('dddd'));
        console.log(moment().format("MMM Do YY"));
        console.log(moment().format('YYYY [escaped] YYYY'));
        console.log(moment().format()  );
      }}>moment js </button>
      
    </div>
  );
}

export default App;
