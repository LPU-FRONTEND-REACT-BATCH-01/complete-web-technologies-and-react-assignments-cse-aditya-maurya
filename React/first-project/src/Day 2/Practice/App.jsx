// import {provider} from 'react-redux'

// import userDetails from './Component/UserDetails'
// import Card from './Component/Card'

// const App =() => {
//     const[state,setState]=useState(0);
//     let normal=0;
//     let handleNormal = ()=> {
//         normal+=1;
//     }
//      let handleState = ()=> {
//         setState(5)
//     }
//     return 
//     <div>
//         <h1>this is state varaible {state}</h1>
//         <h1>this is normal state</h1>
//         <button onClick={handleNormal}></button>
//         <button onClick={handleState}></button>


//     </div>
// }

// export default App  










// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
      
//       <h1>this is state count {count} </h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";

// const App =() => {
//     const[show,setShow]=useState("password")
//     let handleShow =() => {
//         setShow("text")
//     }

//     return <div>
//         <input type={show} />
//         <button onClick={handleShow}>show</button>
//     </div>
// }

// export default App;









// import React, { useState } from "react";

// const App = () => {
//   const [show, setShow] = useState("password");

//   const handleShow = () => {
//     setShow(show === "password" ? "text" : "password");
   
//   };

//   return (
//     <div>
//       <input type={show} />
//       <button onClick={handleShow}>
//         {show === "password" ? "Show" : "Hide"}
//       </button>
//     </div>
//   );
// };

// export default App;









// import React, { useState } from "react";

// const App = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div>
//       <input type={show ? "text" : "password"} />

//       <i
//         className={show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
//         onClick={() => setShow(prev => !prev)}
//       ></i>
//     </div>
//   );
// };

// export default App;





// import React, { useState } from "react";

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <img src={
//           isOn
//             ? "https://www.w3schools.com/js/pic_bulbon.gif"
//             : "https://www.w3schools.com/js/pic_bulboff.gif"
//         }
//         alt="bulb"
//         width="120"
//         button onClick={() => setIsOn(prev => !prev)} {
//           {isOn ? "Turn OFF" : "Turn ON"}
//         }
//       />
//     </div>
//   );
// };

// export default App;








// import React, { useState } from "react";

// const App = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div>
//       <img src={
//           isOn
//             ? "https://www.w3schools.com/js/pic_bulbon.gif"
//             : "https://www.w3schools.com/js/pic_bulboff.gif"
//         }
//         alt="bulb"
//         width="100"
//       />

//       <br />

//       <button onClick={() => setIsOn(prev => !prev)}>
//         {isOn ? "Turn OFF" : "Turn ON"}
//       </button>
//     </div>
//   );
// };

// export default App;








import react, {useState} from 'react'

const App =() =>{
  const[state,setState]=useState(0);
  const [count,setCount]=useState(0);
  const [count1,]
  useEffect(() => {
    console.log("Component render");
  }); 





}

export default App