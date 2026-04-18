// import React, { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//         if (!res.ok) return;

//         const result = await res.json();
//         setData(result);
//       } catch {
//         return;
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.slice(0, 5).map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState } from 'react';
// const App = () => {
//     const [state,setState]=useState([])
//     useEffect(()=> {
//         let fetchData= async() => {
//             let res=await fetch("")
//             console.log(res);
//         if(res.ok){
//             let data=await res.json("https://dummyjson.com/products");
//             setState(data.products)
//         }
//         }
//         fetchData()
//     },[])
//     console.log(state)
//     return 
//     <div>state.map({products})</div>
// }

// export default App;






 





// import React, { useEffect, useState } from "react";
// import Card from "./card";

// const App = () => {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let res = await fetch("https://dummyjson.com/products");

//         if (!res.ok) return;

//         let data = await res.json();
//         setState(data.products);
//       } catch {
//         return;
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {state.map((item) => (
//         <Card key={item.id} product={item} />
//       ))}
//     </div>
//   );
// };

// export default App;






import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        UserName: <input type="text" name="username" onChange={handleChange} />
        <br />

      Password: <input type="password" name="password" onChange={handleChange} />
      </form>

   
    </div>
  );
};

export default App;