import style from './botao.module.scss'

interface Props{
    children: any,
    type?: "button" | "submit" | "reset" | undefined
}

export function Botao({children, type="button"}:Props){
    return(
        <>
        <button type={type} className={style.botao}>
            {children}
        </button>
        </>
    )
}