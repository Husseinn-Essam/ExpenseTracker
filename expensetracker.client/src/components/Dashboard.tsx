import { Chart ,defaults  } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "../../data/revenueData.json";
import sourceData from "../../data/sourceData.json";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
//defaults.maintainAspectRatio = false;
//defaults.responsive = true;

//defaults.plugins.title.display = true;
///defaults.plugins.title.align = "start";
//defaults.plugins.title.font.size = 20;

export default function Dashboard() {
 
  
  
  return (
    <div className="w-full mt-5 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
      </div>

      <div className="stats shadow mt-4 md:mt-0">
        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
      </div>

      <div className="stats shadow mt-4 lg:mt-0">
        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <div className="bg-base-100 rounded-md h-55 md:col-span-1 lg:col-span-1">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
      </div>

      <div className="bg-base-100 rounded-md md:col-span-2 lg:col-span-2 row-start-2  ">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Income",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Expense",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
