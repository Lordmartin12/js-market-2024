import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

const BarChart = ({ chartCategories, chartSeries }) => {
    // const [options, setOptions] = useState({
    //     chart: {
    //         id: "basic-bar",
    //     },
    //     xaxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    //     }
    // });

    // const [series, setSeries] = useState([
    //     {
    //         name: "income",
    //         data: [30, 40, 45, 50, 49, 60, 70, 91, 130]
    //     },
    //     {
    //         name: "expenses",
    //         data: [20, 30, 65, 80, 49, 60, 50, 31, 100]
    //     }
    // ]);

    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState(null);

    useEffect(() => {
        if (chartCategories) {
            let chartOption = {
                chart: {
                    id: "basic-bar",
                },
                xaxis: {
                    categories: chartCategories
                }
            }

            // Set the chart Option into the option state
            setOptions(chartOption)
            setSeries(chartSeries)
        }
    }, [chartCategories, chartSeries]);

    return (
        <div>
            {options && <div className='mixed-chart pt-3'>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="100%"
                />
            </div>}
        </div>
    )
}

export default BarChart