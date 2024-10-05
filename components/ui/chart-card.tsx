"use client";

import * as React from "react";
import { Dot, DotIcon, MoveUp, TrendingUp } from "lucide-react";
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

export const description = "A donut chart with text";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex h-full flex-col bg-gradient-to-t from-[#572ad8] via-[#3260dc] to-[#01a8e1]">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-white">DIVISION</CardTitle>
        <CardDescription>
          <Tabs defaultValue="metals" className="mt-5">
            <TabsList className="flex justify-center">
              <TabsTrigger value="metals">Metals</TabsTrigger>
              <TabsTrigger value="minerals">Minerals</TabsTrigger>
            </TabsList>
            <TabsContent value="account"></TabsContent>
            <TabsContent value="minerals"></TabsContent>
          </Tabs>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex-col gap-2 text-sm">
        <Tabs defaultValue="amount" className="w-full">
          <TabsList>
            <TabsTrigger value="amount">Amount</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
          </TabsList>
          <TabsContent value="amount">
            <ul>
              <li className="flex items-start">
                <Dot size={50} color="#fff" />
                <span className="text-white">
                  <p className="text-md">Coal</p>
                  <p className="text-lg">
                    $ 12,000
                    <span className="text-white bg-[#3aa345] ml-2 rounded-sm px-1 text-xs inline-flex items-center gap-1">
                      10.3% <MoveUp size={10} color="#fff" />
                    </span>
                  </p>
                </span>
              </li>
              <Dot size={50} color="#fff" />
              <Dot size={50} color="#fff" />
            </ul>
          </TabsContent>
          <TabsContent value="volume">Change your password here.</TabsContent>
        </Tabs>
      </CardFooter>
    </Card>
  );
}
