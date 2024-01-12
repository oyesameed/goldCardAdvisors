import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'

function Chart() {
    const data = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Variable',
                data: [ 0, 300, 200, 500, 250, 400, 240, 500, 600],
                fill: true,
                backgroundColor: 'rgba(39,103,254,0.15)',
                borderColor: 'rgba(39,103,254,1)',
                cubicInterpolationMode: 'monotone',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'category',
                gridLines: {
                    color: 'hsla(0,0%,100%,0.7)',
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    color: 'rgb(102, 102, 102)',
                    font: {
                        family: "'Inter', monospace",
                        size: 10,
                    },
                },
            },
            y: {
                id: 'variable',
                position: 'left',
                ticks: {
                    color: 'rgb(102, 102, 102)',
                    font: {
                        family: "'Roboto Mono', monospace",
                        size: 10,
                    },
                },
            },
        },
    };

    return (
        <div className="h-60">
            <Line data={data} options={options} />
        </div>
    );
}

export default Chart;
