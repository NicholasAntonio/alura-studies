import style from './botao.module.scss'

interface Props{
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void 
}

export function Botao({children, onClick, type="button"}:Props){
    return(
        <>
        <button type={type} className={style.botao} onClick={onClick}>
            {children}
        </button>
        </>
    )
}