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
      const response = await axios.post<DataItem[], any>(
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

      <form>
        <input type="text" name="countryName"/>
      </form>

      
    </div>
  );
}

export default ReadData;
