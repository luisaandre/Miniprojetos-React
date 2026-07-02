import style from '../styles/Card.module.css'
import Button from './Button.jsx'

export default function Card({img, title, description}) {
    return(
        
        <div className={style.poster}>
            <img src={img} alt='poster' className={style.imageSW}></img>
            
            <div className={style.text}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>

                <Button button='Comprar agora'/>
            </div>

        </div>
    )
}
