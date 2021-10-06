import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Result.css"
function Result() {

    const data = [
        {
            name: 'Science',
            uv: 84,
        },
        {
            name: 'Commerce',
            uv: 30,
        },
        {
            name: 'Arts',
            uv: 10,
        }
    ];
    const scoreData = [
        {
            name: 'Logical',
            uv: 75,
        },
        {
            name: 'Verbal',
            uv: 70,
        },
        {
            name: 'Maths',
            uv: 95,
        }
    ];

    return (
        <div className="container">
            <h1>Career Guidance Report</h1>
            <div className="score">
                <div className="score-content-left">
                    <h3>Total Score</h3>
                    <svg viewBox="0 0 36 36" className="circular-chart red">
                        <path className="circle-bg"
                            d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path className="circle"
                            strokeDasharray="70, 100"
                            d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="20.35" className="percentage">70%</text>
                    </svg>
                </div>
                <div className="score-content-right">
                    <div className="top-score">
                        <p className="score-heading">Best</p>
                        <p className="score-heading">Score</p>
                    </div>
                    <div className="top-score">
                        <div className="res-circle">
                            <div className="circle-txt">Logical</div>
                        </div>
                    </div>
                    <div className="top-score">
                        <div className="res-circle">
                            <div className="circle-txt">Maths</div>
                        </div>
                    </div>
                    <div className="top-score">
                        <div className="res-circle">
                            <div className="circle-txt">Gk</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart">
                <div className="chart-content">
                    <ResponsiveContainer width="100%" aspect={3}>
                        <BarChart width={150} height={100} data={data} margin={{
                            top: 5, bottom: 5
                        }}>
                            <Bar dataKey="uv" fill="#8884d8" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart-content">
                    <ResponsiveContainer width="100%" aspect={3} className="bar">
                        <BarChart width={150} height={100} data={scoreData} margin={{
                            top: 5, bottom: 5
                        }}>
                            <Bar dataKey="uv" fill="#eba434" width="10%" />
                            <XAxis dataKey="name" />
                            <YAxis markerEnd='100' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Result
