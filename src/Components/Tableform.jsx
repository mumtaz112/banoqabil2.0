import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
function Tableform() {
    const [inputdata,Setinputdata]=useState({ username:"", rollno:"" })
    const[inputarr,Setinputarr]=useState([])

    function changehandle(e){
        Setinputdata({
         ...inputdata,
         [e.target.name]:e.target.value
      
        })

}
let{username,rollno}=inputdata
function changhandle(){
 Setinputarr([...inputarr,{username,rollno}])   
 console.log(inputarr);
console.log(inputdata)
}
  return (
    <>
    <br></br><br></br>
    <div className='usr-form d-flex align-items-center justify-content-center w-50 m-auto' style={{height:"70vh"}}>
     <div className='container'>  
     <div className='row'> 
     <div className='col-md-12'>  
     <input type="text" className='w-100' placeholder='Enter UserName' autoComplete='off' name='username' value={inputdata.username} onChange={changehandle}></input>
     <br/>
     <br/>
     <input type="text" className='w-100' placeholder='Enter RollNo' autoComplete='off' name='rollno' value={inputdata.rollno} onChange={changehandle}></input> 
     <br/>
     <br/>
     <button  className='btn btn-danger w-100' onClick={changhandle}>Add value</button> 
     <br/>
     <br/>
     {/* <table border={2} width="100%" cellPadding={10}>
        <tbody>
      <tr>
        <td>Name</td>
        <td>Roll No</td>
        </tr> 
        {
           inputarr.map(
            (val,key)=>{
             return(
             <tr key={key}>
             <td>{val.username}</td>
             <td>{val.rollno}</td>   
             </tr>   
             )   
            }
           ) 
} 
    </tbody>
     </table> */}
     <Table striped bordered hover>
     
      <tbody>
      <tr>
        <td>Name</td>
        <td>Roll No</td>
        </tr> 
        {
           inputarr.map(
            (val,key)=>{
             return(
             <tr key={key}>
             <td>{val.username}</td>
             <td>{val.rollno}</td>   
             </tr>   
             )   
            }
           ) }
       
       
      </tbody>
    </Table>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Tableform
