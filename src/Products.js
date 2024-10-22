import React from "react";
import { useState } from "react";
export default function Products() {
  const items = [
    { name: "Product 1", desc: "This is a dummy description", price: 30,Image:<img src="https://images.pexels.com/photos/6959943/pexels-photo-6959943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='App-coffee' ></img>},
    { name: "Product 2", desc: "This is a dummy description", price: 80, Image:<img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='App-coffee'></img>},
    { name: "Product 3", desc: "This is a dummy description", price: 90,Image:<img src="https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='App-coffee'></img> },
    { name: "Product 4", desc: "This is a dummy description", price: 50, Image:<img src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='App-coffee'></img>},
    { name: "Product 5", desc: "This is a dummy description", price: 40,Image:<img src="https://images.pexels.com/photos/3216564/pexels-photo-3216564.jpeg?auto=compress&cs=tinysrgb&w=600" className='App-coffee'></img> },
    { name: "Product 6", desc: "This is a dummy description", price: 50, Image:<img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=600" className='App-coffee'></img>},
    { name: "Product 7", desc: "This is a dummy description", price: 70,Image:<img src="https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&w=600" className='App-coffee'></img> },
    { name: "Product 8", desc: "This is a dummy description", price: 50, Image:<img src="https://images.pexels.com/photos/1710023/pexels-photo-1710023.jpeg?auto=compress&cs=tinysrgb&w=600" className='App-coffee'></img>},
  ];
  const [products, setProducts] = useState(items);
  return (
    <div className="App-products">
      {products.map((value, index) => (
        <div className="App-item">
          {value.Image}
          <h3>{value.name}</h3>
         
          <p>{value.desc}</p>
          <div className="App-side">
          <h4>{value.price}</h4>
          <button className="App-btn">Add</button>
          </div>
          </div>
      ))}
    </div>
  );
}
