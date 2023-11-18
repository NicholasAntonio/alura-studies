import style from './relogio.module.scss'

export function Relogio(){
    return(
        <>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioNumero}>0</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>0 </span>
        <span className={style.relogioNumero}>0</span>
        </>
    )
}