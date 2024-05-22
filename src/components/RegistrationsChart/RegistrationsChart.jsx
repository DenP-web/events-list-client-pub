import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { $host } from "../../axios";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const RegistrationsChart = ({ eventId, show }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Registrations per Day",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await $host(`/events/${eventId}/reg-per-day`);

        const dates = data.map((item) => item.date);
        const counts = data.map((item) => item.count);

        setChartData((prev) => ({
          ...prev,
          labels: dates,
          datasets: [{ ...prev.datasets[0], data: counts }],
        }));
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };
    fetchData();
  }, [eventId]);

  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
        borderCapStyle: "round",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  return (
    show && (
      <div style={{ width: 300, height: 200 }}>
        <h2>Registrations per Day</h2>
        {chartData.labels.length > 0 ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  );
};

export default RegistrationsChart;
