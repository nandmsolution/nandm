import {useState }from "react";
import "./App.css"

function Test(props) {
  console.log(props);
  return (
    <div>
      <p>
        {props.data}
      </p>
    </div>

  )

}

function Master(props) {
  const [data,setData] = useState(["master","Norru"])

  return (
    <div >
      {props.name}
      {
        data.map((item )=> <Test data={item}/> )

      }
      {
        
      }
    </div>

  )
}

export default Master;
