import { FunctionalComponent, h } from 'preact';
import style from './style.scss';

import { data1, data2, data3, data4 } from './mock';


const ToolsInterface: FunctionalComponent = () => {
return (
    <div className={style.start}>
        <h2>Tools Interface</h2>
        <div>
            <div className={style['start__item-container']}>
                <div className={style['start__title-wrapper']}>
                    <img src='../../assets/img/iconUni.png' width="48" height="48" alt="" />
                    <h3> Hot Uni </h3>
                </div>
                <div className={style['start__main-wrapper']}>
                    <div className={style['start__main-column']}>
                        {
                          data1.map(item =>
                            <div className={style['start__main-item']}>
                                <div className={style['start__item-text']}>
                                    <div className={style['start__div']}>
                                        <p>Name</p>
                                        {item.stonks === 'bad' ? <img style={{marginLeft: '5px'}} src='../../assets/img/bad.svg' alt="bad" /> 
                                          : item.stonks === 'good' && <img style={{marginLeft: '5px'}} src='../../assets/img/good.svg' alt="good" /> 
                                        }
                                    </div>
                                    <p className={`${item.stonks === 'bad' ? style["start__red"] : style["start__normal"]} `} >$0.04641953</p>
                                </div>
                                <img src='../../assets/img/Compass.svg' width="24" height="24"alt=''/>
                            </div>
                          )
                        }
                    </div>
                    <div className={style['start__main-column']}>
                        {
                          data2.map(item =>
                            <div className={style['start__main-item']}>
                                <div className={style['start__item-text']}>
                                    <div className={style['start__div']}>
                                        <p>Name</p>
                                        {item.stonks === 'bad' ? <img style={{marginLeft: '5px'}} src='../../assets/img/bad.svg' alt="bad" /> 
                                          : item.stonks === 'good' && <img style={{marginLeft: '5px'}} src='../../assets/img/good.svg' alt="good" /> 
                                        }
                                    </div>
                                    <p className={`${item.stonks === 'bad' ? style["start__red"] : style["start__normal"]} `} >$0.04641953</p>
                                </div>
                                <img src='../../assets/img/Compass.svg' width="24" height="24"alt=''/>
                            </div>
                          )
                        }
                    </div>
                </div>
            </div>

          <div className={style['start__item-container']}>
            <div className={style['start__title-wrapper']}>
              <img src='../../assets/img/iconSushi.png' width="48" height="48" alt="" />
              <h3> Hot Sushi </h3>
            </div>
            <div className={style['start__main-wrapper']}>
            <div className={style['start__main-column']}>
                        {
                          data1.map(item =>
                            <div className={style['start__main-item']}>
                                <div className={style['start__item-text']}>
                                    <div className={style['start__div']}>
                                        <p>Name</p>
                                        {item.stonks === 'bad' ? <img style={{marginLeft: '5px'}} src='../../assets/img/bad.svg' alt="bad" /> 
                                          : item.stonks === 'good' && <img style={{marginLeft: '5px'}} src='../../assets/img/good.svg' alt="good" /> 
                                        }
                                    </div>
                                    <p className={`${item.stonks === 'bad' ? style["start__red"] : style["start__normal"]} `} >$0.04641953</p>
                                </div>
                                <img src='../../assets/img/Compass.svg' width="24" height="24"alt=''/>
                            </div>
                          )
                        }
                    </div>
                    <div className={style['start__main-column']}>
                        {
                          data1.map(item =>
                            <div className={style['start__main-item']}>
                                <div className={style['start__item-text']}>
                                    <div className={style['start__div']}>
                                        <p>Name</p>
                                        {item.stonks === 'bad' ? <img style={{marginLeft: '5px'}} src='../../assets/img/bad.svg' alt="bad" /> 
                                          : item.stonks === 'good' && <img style={{marginLeft: '5px'}} src='../../assets/img/good.svg' alt="good" /> 
                                        }
                                    </div>
                                    <p className={`${item.stonks === 'bad' ? style["start__red"] : style["start__normal"]} `} >$0.04641953</p>
                                </div>
                                <img src='../../assets/img/Compass.svg' width="24" height="24"alt=''/>
                            </div>
                          )
                        }
                    </div>
            </div>
          </div>
        </div>
        <img className={style['start__bg']} src='../../assets/img/tools-bg.png' alt='how to start img' />
    </div>
)
}

export default ToolsInterface;