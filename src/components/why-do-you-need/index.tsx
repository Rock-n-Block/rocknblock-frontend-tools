import {FunctionalComponent, h} from 'preact';
import style from './style.scss';

const WhyDoYouNeed: FunctionalComponent = () => {

    return (
        <div className={style.launch}>
            <h2>Why do you need to build your Tools Platform?</h2>
            <p>To provide users with an analysis of your portfolio, set up alerts, and get real-time insights. Get an overview of the market, and track coins in the watchlist. Rock'n'Block provides development solutions an insightful dashboard, available in both mobile and desktop to keep track of performance and transactions in real-time with an amazing user experience.</p>
            <img className={style['launch__bg-molnia']} height='218' width='232' src='../../assets/img/molnia.png' alt='how to start img' />
            <picture className={style['launch__bg']}>
                <source srcset='../../assets/img/launch-bg-mobile.png' alt='' media="(max-width: 768px)" />
                <img  src='../../assets/img/launch-bg.png' alt='how to start img' />
            </picture>
        </div>
    )
}

export default WhyDoYouNeed;