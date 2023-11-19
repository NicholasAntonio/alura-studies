import { ITarefa } from '../../types/tarefa';
import { Item } from './Item';
import style from './lista.module.scss'


interface Props{
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
  tarefas: ITarefa[]
}

export function Lista({tarefas, selecionaTarefa}: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
         <Item key={item.id} {...item} selecionaTarefa={selecionaTarefa} />
        ))}
      </ul>
    </aside>
  );
}
