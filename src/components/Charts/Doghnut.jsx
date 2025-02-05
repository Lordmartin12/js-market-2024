import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts';

const Doghnut = () => {
    const [options, setOptions] = useState({
        series: [44, 55, 41, 17, 15],
        chart: {
            type: 'donut',
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    // width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    show: true
                  },
                  value: {
                    show: true
                  }
                }
              }
            }
          },
    })

    return (
        <div>
            {options && <div className='mixed-chart pt-3'>
                <Chart
                    options={options}
                    series={options.series}
                    type="donut"
                    width="100%"
                />
            </div>}
        </div>
    )
}

export default Doghnut