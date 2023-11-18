import style from './botao.module.scss'

interface Props{
    children: any
}

export function Botao({children}:Props){
    return(
        <>
        <button className={style.botao}>
            {children}
        </button>
        </>
    )
}