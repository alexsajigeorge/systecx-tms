import React, { useEffect, useState } from "react";
import SmallCard from "./smallcard";
import { MoveUp } from "lucide-react";
import axios from "axios";

interface ProcessStage {
  stageName: string;
  status: string;
  cost: string;
}

interface Trade {
  id: string;
  tradeStage: string;
  processStage: ProcessStage[];
}

const TradeOverview = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [totalTrades, setTotalTrades] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const stages = [
    "Contract stage",
    "Pre Shipment",
    "Post Fixtures Vessel",
    "In-Transit",
    "Pre Closure",
  ];

  const fetchTrades = async () => {
    try {
      const response = await axios.get<Trade[]>("/api/trans");
      const tradesData = response.data;

      const tradesCount = tradesData.length;

      setTrades(response.data);

      setTotalTrades(tradesCount);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trades:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();
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
            <span className="text-blue-950 text-5xl">{totalTrades}</span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">TOTAL REVENUE TRADES</p>
            <div className="text-blue-950 text-5xl flex items-center gap-2">
              3945.07
              <span className="text-white bg-[#3aa345] rounded-sm text-sm px-2 flex w-full h-10 items-center gap-1">
                10.3% <MoveUp size={10} color="#fff" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-12">
          {stages.map((stage) => {
            const filteredTrades = trades.filter(
              (trade) => trade.tradeStage === stage
            );
            const estimatedCost = filteredTrades.reduce((acc, trade) => {
              const cost = trade.processStage.find(
                (ps) => ps.stageName === "Estimated cost sheet"
              );
              return acc + (cost ? parseFloat(cost.cost) : 0);
            }, 0);

            return (
              <SmallCard
                key={stage}
                stage={stage}
                tradeCount={filteredTrades.length}
                totalRevenue={estimatedCost}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TradeOverview;
