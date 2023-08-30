import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface DataItem {
  pkId: number;
  countryName: string;
  isActive: boolean;
}

function ReadData() {
  const [datas, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios
      .get<DataItem[], any>(
        "http://10.37.57.211:5105/api/v1/Country/Search?Page=1&PageSize=10"
      )
      .then((res) => setData(res.data.data))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <h1>Read Data</h1>

      <div><Link to="/Create" className="btn btn-primary ">Add</Link></div>

      <table style={{ border: "1px solid black", width: "100%" }}>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <th>pkId</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
          {datas.map((item) => (
            <tr key={item.pkId} style={{ textAlign: "center" }}>
              <td key={item.pkId}>{item.pkId} </td>
              <td key={item.pkId}>{item.countryName} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadData;
