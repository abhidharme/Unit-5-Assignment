import logo from './logo.svg';
import './App.css';

// function App() {
//   const os_data = ["Android" , "Blackerry" , "iPhone" , "Windows Phone"];

//   return <div>{os_data.map((os)=> Os_name(os))}</div>
// }

// function Os_name(os){
  
//   return(
//     <div>
//       <h1>Mobile Operating Syatem</h1>
//       <ul>
//         <li>{os}</li>
//       </ul>
//     </div>
//   )
// }


function App() {
  const os_data = ["Android" , "Blackerry" , "iPhone" , "Windows Phone"];
  const mobile_com = ["Samsung", "HTC" , "Micromax" , "Apple"];
return(
  <div>
  <h1>Mobile Operating Syatem</h1>
  <ul>
    {os_data.map((os)=>(
      <li>{os}</li>
    ))} 
  </ul>

  <div>
    <h1>Mobile Manufacturers</h1>
    <ul>
      {mobile_com.map((com)=>(
        <li>{com}</li>
      ))}
    </ul>
  </div>
  </div>

  
)
}
export default App;
