import React from "react";

// const Card = (props) => {
//     console.log(props.variable)
//   return (
//     <div>
//       <h1>{props.variable}</h1>
//     </div>
//   );
// };

// export default Card;


// const Card = (props) => {
//   return (
//     <div>
//       <h2>ID: {props.user.id}</h2>
//       <h2>Name: {props.user.name}</h2>
//       <h2>Age: {props.user.age}</h2>
//       <h2>City: {props.user.city}</h2>
//     </div>
//   );
// };

// export default Card;





const Card = ({ user: { id, name, age, city } }) => {
  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>City: {city}</h2>
    </div>
  );
};

export default Card;