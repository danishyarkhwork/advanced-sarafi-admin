// Dashboard.js
import { Line, Bar } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Exchange Volume",
      data: [3000, 4000, 2500, 5000, 6000],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="text-2xl font-bold mb-6">Money Exchange Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="text-xl mb-4">Exchange Volume</h3>
          <Line data={chartData} />
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h3 className="text-xl mb-4">Currency Rates</h3>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
