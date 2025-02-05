import axios from "axios";
import BarChart from "../../components/Charts/BarChart"
import { useEffect, useState } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import Doghnut from "../../components/Charts/Doghnut";

const Dashboard = () => {
    const [chartData, setChartData] = useState(null);

    const fetchChartData = async () => {
        await axios.get('http://localhost/fakeapi/charts/chart-data.php')
            .then((res) => {
                setChartData(res.data);
            })

    };

    useEffect(() => {
        fetchChartData();
    }, [])

    return (
        <div className="py-5 px-4">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <aside className="bg-white shadow min-h-32 rounded-2xl">
                    {/* If the chart data is not null, then show it else show a circle notch spinner */}
                    {chartData ? (
                        <BarChart chartCategories={chartData.categories} chartSeries={chartData.series} /> 
                    ) : (
                        <div className="h-full flex justify-center items-center">
                            <FaCircleNotch className="animate-spin text-5xl" />
                        </div>
                    ) }
                </aside> 
                <aside className="bg-white shadow min-h-32 rounded-2xl">
                    <Doghnut />
                </aside>
            </section>
        </div>
    )
}

export default Dashboard