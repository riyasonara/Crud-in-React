import axios from "axios";
import { useState, useEffect } from "react";

interface DataItem {
  pkId: number;
  countryName: string;
  isActive: boolean;
}

function ReadData() {
  const [datas, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<DataItem[], any>(
        "http://10.37.57.211:5105/api/v1/Country/Search?Page=1&PageSize=10"
      );
      console.log(Object.values(response.data));
      setData(response.data.data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <h1>Read Data</h1>

      <table style={{ border: "1px solid black", width: "100%" }}>
        <tbody>
          <tr style={{textAlign:"center"}}>
            <th>pkId</th>
            <th>Country</th>
          </tr>
          {datas.map((item => (
            <tr key={item.pkId} style={{textAlign:"center"}}>
              <td key={item.pkId}>{item.pkId} </td>
              <td key={item.pkId}>{item.countryName} </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default ReadData;
