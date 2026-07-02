import style from './Card.module.css'

export default function Card({profile, name, position, phone, mail, githuburl, linkedinurl, instaurl}) {
    return (
    <>
        <div className={style.card}>
            <img src={profile} className={style.profile} alt={name}></img>

            <h1 className={style.name}>{name}</h1>
            <p className={style.info}>{position}</p>
            
            <p className={style.info}>{phone}</p>
            
            <p className={style.info}>{mail}</p>

            
            <div>
                <a href={githuburl} target='_blank' className={style.button}>GitHub</a>
                <a href={linkedinurl} target='_blank' className={style.button}>LinkedIn</a>
                <a href={instaurl} target='_blank' className={style.button}>Instagram</a>
            </div>  
        </div>
    </>
    )

}