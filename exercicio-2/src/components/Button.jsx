import style from '../styles/Card.module.css'

export default function Button({button}) {
    return(
        <>
            <button className={style.btnBuy}>{button}</button>
        </>
    )
}