import React from 'react'
import "./Result.css"
function Result() {
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
            </div>
        </div>
    )
}

export default Result
