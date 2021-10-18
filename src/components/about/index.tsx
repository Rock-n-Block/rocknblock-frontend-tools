import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import bgImg from '../../assets/img/about-bg.png';
import bgImgMobile from '../../assets/img/about-bg-mobile2.png';

const About: FunctionalComponent = () => {

    return (
        <div className={style.about}>
            <div className={`${style['about__main-wrapper']}`}>
                <h1>Tools Development</h1>
                <p>Make the best Trade Tools</p>
                <a
                    className={`${style.btn} ${style['btn-orange-cl-solid']} ${style['btn-rounded']}`}
                >
                    Create Own Tools
                <img src="../../assets/img/icons/icon-arrow-right-mask.svg" alt="arrow-right" />
            </a>
            </div>

            <div className={style['about__bg']}>
                <picture>
                    <source type="image/webp" srcSet={bgImg} media="(min-width: 1440px)" />
                    <source type="image/webp" srcSet={bgImg} media="(min-width: 768px)" />
                    <source type="image/webp" srcSet={bgImg} media="(max-width: 768px)" />
                    <img src={bgImg} alt=''/>
                   
                </picture>
            </div>

            
            
        </div>
    )
}

export default About;