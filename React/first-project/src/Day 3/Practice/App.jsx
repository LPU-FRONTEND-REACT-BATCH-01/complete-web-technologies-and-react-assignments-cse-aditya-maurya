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
  const [formData, setFormData] = useState({ skills: [] });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const skills = prev.skills || [];

        if (checked) {
          return { ...prev, skills: [...skills, value] };
        } else {
          return {
            ...prev,
            skills: skills.filter((skill) => skill !== value),
          };
        }
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const formValidation= {
    uppercase:/[A-Z]/.test(formData.password),
    lowercase:/[a-z]/.test(formData.password),
    number:/[0-9]/.test(formData.password),
  lengthOfPassword: (formData.password || "").length >= 8
  
  
  }


  let strength = "Weak";
  const length = (formData.password || "").length;

  if (length < 2) {
    strength = "Weak";
  } else if (length < 5) {
    strength = "Medium";
  } else {
    strength = "Strong";
  }
  console.log(formValidation)


  let handleSubmit = (e)=> {
    e.preventDefault()
     console.log(from)
  }

  return (
    <div>
      <form action="submit">
        UserName:
        <input type="text" name="username" onChange={handleChange} />
        <br /><br />

        Password:
        <input type="password" name="password" onChange={handleChange} />
        <br /><br />
        

     

       <ul>
  <li style={{ color: formValidation.uppercase ? "green" : "red" }}>
    it contains at least one Uppercase
  </li>

  <li style={{ color: formValidation.lowercase ? "green" : "red" }}>
    it contains at least one lowerCase
  </li>

  <li style={{ color: formValidation.number ? "green" : "red" }}>
    it contains at least one number
  </li>

  <li style={{ color: formValidation.lengthOfPassword ? "green" : "red" }}>
    Length atleast 8
  </li>
</ul>


        {/* <p>
          Password Strength:{" "}
          <span
            style={{
              color:
                strength === "Strong"
                  ? "green"
                  : strength === "Medium"
                  ? "orange"
                  : "red",
            }}
          >
            {strength}
          </span>
        </p> */}
        Gender:
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <br /><br />

        Skills:
        <input type="checkbox" name="skills" value="HTML" onChange={handleChange} /> HTML
        <input type="checkbox" name="skills" value="CSS" onChange={handleChange} /> CSS
        <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} /> JavaScript
      </form>

        {length >= 8 && <button type="submit">Submit</button>}

    </div>
  );
};

export default App;