import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { Botao } from "../Botao";
import { Relogio } from "./Relogio";
import style from './cronometro.module.scss'

interface Props{
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}


export function Cronometro({selecionado, finalizarTarefa}: Props){
    const [tempo,setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo){
           setTempo(tempoParaSegundos(selecionado?.tempo)) 
        }
    }, [selecionado]);

    function contagemRegressiva(contador: number = 0){
        setTimeout(() => {
            if(contador>0){
                setTempo(contador-1)
                return contagemRegressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => contagemRegressiva(tempo)}>
                Iniciar!
            </Botao>
        </div>
    )
}