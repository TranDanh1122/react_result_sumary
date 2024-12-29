
import "./ResultCard.css";
import { useState, useEffect } from "react";
import SumaryItem from "./SumaryItem";
export default function ResultCard() {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("/data.json").then(response => response.json()).then(data => setData(data)).catch(error => console.error("Error when loading data", error));
    }, [])

    if (!data) return <p>Loading...</p>;
    console.log(data);

    return (
        <div className='card'>
            <div className='card__info'>
                <span className="card__subtitle">Your Result</span>
                <div className="card__score">
                    <h1>76</h1>
                    <span>of 100</span>
                </div>
                <span className="card__review">Great</span>
                <p className="card_desc">
                    Your performance exceeds 65% of the people conducting the test here!
                </p>
            </div>
            <div className="card__sum">
                <h2>Summary</h2>
                <div className="summary">
                    {data.map((el, index) => (<SumaryItem key={index} score={el.score} category={el.category} icon={el.icon}  ></SumaryItem>))}
                </div>
                <button className="card__continue">Continue</button>

            </div>
        </div>
    )
}