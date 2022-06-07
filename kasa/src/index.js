import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {logements} from "./assets/data/logements";
import {Header} from "./components/Header";
import {Banner} from "./components/Banner";
import imageBackgroundHome from "./assets/images/banners/home-background.png";
import {LodgingCard} from "./components/LodgingCard";

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Header/>);
//root.render(<Banner src={imageBackgroundHome} text={"Chez vous, partout et ailleurs"}/>);
root.render(<LodgingCard nameLocation={logements[0].title} imgLocation={logements[0].cover}></LodgingCard>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
