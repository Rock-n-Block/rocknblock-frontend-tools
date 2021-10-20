import {FunctionalComponent, h} from 'preact';
import style from './style.scss';
import {devCards} from "./mock";

const ToolsOptions: FunctionalComponent = () => {

    return (
        <div className={style.dev}>
            <h2 className={style['dev__title']}>Tools Options for tracking</h2>
            <div className={style['dev__cards']}>
                {devCards.map((item, index: number) =>
                    <div key={`${item.title}__${index}`} className={style['dev__cards_item']}>
                        <div>
                            <img width='80' height='80' src={item.img} alt='' />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.alt}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToolsOptions;