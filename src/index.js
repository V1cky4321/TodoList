import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Addt = ({addValue}) =>{
  const[value,updateV]=useState("");

  const submitHandle = (e) =>{
    e.preventDefault();
    if(value !== ""){
      addValue(value);
      updateV("");

    }
  }


  return (
    <form onSubmit={submitHandle} className="form1">
      <input type='text' value={value} placeholder="Enter Your task" onChange={e => updateV(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
   
  )
}







 const App=() => {
  const addValue = (ctask) => Update([...current,{ctask}])
  const[current,Update]=useState([
    {
      ctask:"Breakfast",
      Completed:false
    },
    {
      ctask:"Gym",
      Completed:false

    }
  ]);
  const strikeT = ind => {
    const newT = [...current];
    if(newT[ind].Completed){
      newT[ind].Completed=false;

    }
    else{
      newT[ind].Completed=true;
    }

    Update(newT);

  } 
  const Remove = (ind) => {
    const newT=[...current];
    newT.splice(ind,1);
    Update(newT);

  }

  return (
    <div className='TodoA'>
      {current.map((TaskN,ind) =>(
        <div className='TodoC' key={ind}>
          <span onClick={() => strikeT(ind)} className={TaskN.Completed? "complete":"Nocomplete"}>

           
           {TaskN.ctask}



          </span>
          <div className='butt'>

           <button onClick={()=>Remove(ind)}>Delete</button>
          </div>
        
        </div>
       
        
      ))}
      <Addt addValue={addValue}/>

    </div>
    
      
  
  );
}
ReactDOM.render(<App/>,document.getElementById("root"));
