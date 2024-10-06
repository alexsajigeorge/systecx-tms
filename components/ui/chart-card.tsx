"use client";

import * as React from "react";
import { useState } from "react";
import { ArrowDown, ArrowUp, Dot, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "COAL", visitors: 275, fill: "var(--color-coal)" },
  { browser: "ZINC", visitors: 400, fill: "var(--color-zinc)" },
  { browser: "others", visitors: 190, fill: "var(--color-others)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  coal: {
    label: "coal",
    color: "hsl(var(--chart-1))",
  },
  zinc: {
    label: "zinc",
    color: "hsl(var(--chart-2))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const TabContent = () => {
  return (
    <div className="text-white">
      <div className="flex items-center gap-3">
        <span className="text-green-500 text-3xl">&#9679;</span>
        <p>Coal</p>
      </div>
      <div className="flex bg-gren gap-4 items-center">
        <p className="text-lg">$2,303.72</p>
        <span className="inline-flex bg-green-500 p-1 rounded gap-2 text-xs">
          10.3% <ArrowUp size={14} />
        </span>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="text-green-500 text-3xl">&#9679;</span>
        <p>Aluminum</p>
      </div>
      <div className="flex bg-gren gap-4 items-center">
        <p className="text-lg">$1,242.82</p>
        <span className="inline-flex bg-red-500 p-1 rounded gap-2 text-xs">
          11.5% <ArrowDown size={14} />
        </span>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <span className="text--500 text-3xl">&#9679;</span>
        <p>Iron Ore</p>
      </div>
      <div className="flex bg-gren gap-4 items-center mb-5">
        <p className="text-lg">$398.53</p>
        <span className="inline-flex bg-red-500 p-1 rounded gap-2 text-xs">
          8.9% <ArrowDown size={14} />
        </span>
      </div>
    </div>
  );
};

export function ChartComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Amount", content: <TabContent /> },
    { id: "tab2", label: "Volume", content: <TabContent /> },
  ];

  return (
    <Card className="flex flex-col bg-gradient-to-t from-[#572ad8] via-[#3260dc] to-[#01a8e1]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white mb-2">DIVISIONS</CardTitle>
        <Tabs defaultValue="Metals" className="w-full text-center">
          <TabsList>
            <TabsTrigger value="Metals">Metals</TabsTrigger>
            <TabsTrigger value="Minerals">Minerals</TabsTrigger>
          </TabsList>
          <TabsContent value="Metals">
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-white text-3xl font-bold"
                              >
                                $ {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-white"
                              >
                                COAL
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </TabsContent>
          <TabsContent value="Minerals">
            <CardContent className="flex-1 pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={60}
                    strokeWidth={5}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={viewBox.cy}
                                className="fill-white text-3xl font-bold"
                              >
                                $ {totalVisitors.toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 24}
                                className="fill-white"
                              >
                                ZINC
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </TabsContent>
        </Tabs>
        <div className="w-full max-w-lg">
          <div className="flex gap-5 border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 font-medium text-white focus:outline-none ${
                  activeTab === tab.id
                    ? "border-b-2 border-white text-white font-bold"
                    : " hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="py-4">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="">
                    {tab.content}
                  </div>
                )
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
