// type Product = {
//   id:number;
//   name: string;
//   price: number;
// };

// let products: Product[] = [
//   { id: 1, name: "Phone", price: 20000 },
//   { id: 2, name: "Laptop", price: 50000 }
// ];

// console.log(products);


// interface Product {
//   id:number;
//   title:string;
//   price: number;
// }
// let items:Product[] =[];
// items.push({
//   id: 1,
//   title:"iPhone",
//   price:199
// });
// items.push({
//   id: 2,
//   title:"EarPhone",
//   price:299
// });

// console.log(items);



// type User="Admin" | "Employee" |"Manager"
// let Ankit:User="Admin";


// function display(name:string,age:number,email:string="Not present"){
//   return `Name is ${name} and his age is ${age} and email id is ${email}`
// }

// console.log(display("Chota",21));


// type Add= (a:number,b:number)=>number;
// let addition:Add = (a,b) =>{
//      return a+b;
// }



// type PaymentOption="UPI" | "CARD" | "COD" | "NETBANKING"
// function payment(modeOfPayment:PaymentOption,amount:number):string | number {
//   if(modeOfPayment=="CARD") {
//     console.log("got 5% discount for Card")
//     amount=amount*.95;
//      return `you are paid using ${modeOfPayment} and after discount ${amount}`;
//   }
//    else if(modeOfPayment=="UPI") {
//     console.log("got 10% discount for UPI")
//     amount=amount*.90;
//      return `you are paid using ${modeOfPayment} and after discount ${amount}`;
//   }
//    else if(modeOfPayment=="COD") {
//     console.log("50 Extra for COD")
//     amount=amount+50;
//      return `you are paid using ${modeOfPayment} and after discount ${amount}`;
//   }
  
//     return `you paid using ${modeOfPayment} and got no discount and final amount ${amount}`;
 
// }
// console.log(payment("CARD",5000))
// console.log(payment("UPI",10000));
// console.log(payment("NETBANKING",7000));
  

let arr: any = [];
let arr1: any = [];
let sortByNameAsc: any = [];
let sortByNameDesc: any = [];
let categorymensShirt: any = [];
let categoryBeauty: any = [];

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  arr = data.products
    .filter((item: any) => item.price > 5)
    .map((item: any) => ({
      title: item.title,
      price: item.price
    }));

  arr1 = data.products
    .filter((item: any) => item.price > 10)
    .map((item: any) => ({
      title: item.title,
      price: item.price
    }));

    

  sortByNameAsc = [...data.products]
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((item: any) => ({
    title: item.title,
    price: item.price
  }));


  sortByNameDesc = [...data.products].sort((a, b) =>
    b.title.localeCompare(a.title)
  );
categorymensShirt = data.products.filter(
  (item: any) => item.category == "mens-shirts"
);

categoryBeauty = data.products.filter(
  (item: any) => item.category == "beauty"
  ) .map((item: any) => ({
      title: item.title,
      price: item.price
    }));;


  console.log("Price > 5:", arr);
  console.log("Price > 10:", arr1);
  console.log("Ascending:", sortByNameAsc);
  console.log("Descending:", sortByNameDesc);
  console.log("Mens-shirt :",categorymensShirt);
  console.log("Beauty :", categoryBeauty);
}

getData();