import axios from "axios";
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"

interface countryData {
  countryName: string;
  isActive: boolean;
}

function Create() {
  const [inputData, setInputData] = useState<countryData[]>([]);
  const navigate = useNavigate();

  
  const handleSubmit = (event : any)=>{
    event.preventDefault();

    axios.post("http://10.37.57.211:5105/api/v1/Country/Search?Page=1&PageSize=10",inputData).then(res=>{alert("Data added successfully");
  navigate('/')}).catch(err=>console.log(err));
  }

  return (
    <div>
      <h1>Read Data</h1>

      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Country Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{width:"50%"}}
            name="countryName"
            onChange={e=>setInputData({...inputData,countryName:e.target.value})}
          />
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputEmail1" className="form-label">
            isActive
          </label>
          <input
            type="text"
            className="form-check-input"
            id="exampleCheck1"
            name="isActive"
            onChange={e=>setInputData({...inputData,isActive:e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
