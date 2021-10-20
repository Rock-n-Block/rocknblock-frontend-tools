import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

interface ICard {
    icon: string;
    text: string;
}
const WhatAreTheTools: FunctionalComponent = () => {
    const dataCards: Array<ICard> = [
        {
            icon: '../../assets/img/cardFirst.png',
            text: 'Prediction of the market movement',
        },
        {
            icon: '../../assets/img/cardSecond.png',
            text: 'Exploration of various pools, pairs, and swaps',
        },
        {
            icon: '../../assets/img/cardThird.png',
            text: 'Evaluation of real-time data, for successful trading strategies.',
        }
    ]
    return (
        <div className={style.crowdsale}>
            <div className={style['crowdsale__title-wrapper']}>
                <h2>What are the tools for</h2>
            </div>

            <div className={style['crowdsale__cards-container']}>
                {
                  dataCards.map((data: ICard) => 
                    <div className={style['crowdsale__card-container']}>
                        <p>{data.text}</p>
                        <div className={style['crowdsale__icon-container']}>
                          <img width="64" height="64" src={data.icon} alt='' />
                        </div>
                    </div>
                  )
                }
            </div>

            
        </div>
    )
}

export default WhatAreTheTools;