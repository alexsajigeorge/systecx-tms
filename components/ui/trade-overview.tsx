import React, { useEffect, useState } from "react";
import SmallCard from "./smallcard";
import { MoveUp } from "lucide-react";
import axios from "axios";

const TradeOverview = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [transData, setTransData] = useState();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/trans');
      setTransData(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-xl text-gray-500 font-medium pb-2">
        TRADES OVERVIEW
      </h1>
      <div className="shadow-md bg-gradient-to-t from-[#e2fef9] via-[#f2fffc] to-[#fff] rounded-3xl p-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">TOTAL TRADES</p>
            <span className="text-blue-950 text-5xl">{transData.id.length}</span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">TOTAL REVENUE TRADES</p>
            <div className="text-blue-950 text-5xl flex items-center gap-2">
              3856
              <span className="text-white bg-[#3aa345] rounded-sm text-sm px-2 flex w-full h-10 items-center gap-1">
                10.3% <MoveUp size={10} color="#fff" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-12">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default TradeOverview;
