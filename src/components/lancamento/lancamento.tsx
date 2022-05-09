import { ILancamento } from "../../interfaces/ILancamento";
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';


export function Lancamento(props: {lancamento:Partial<ILancamento>}) {

    const day = dayjs(props.lancamento.date_utc as Date);

    return (
        <div className='ultimo'>
                <img height={150} src={props.lancamento.links?.patch.small}></img>
                <div className='texto'>
                    <h2>{props.lancamento.upcoming ? 'Proximo: ' : 'Ultimo: '}{props.lancamento.name}</h2>
                    <span>Sucesso: {props.lancamento.success ? 'Sim' : 'Não'}</span>
                    <span>Data e horario: {day.locale('pt-BR').format('DD/MM/YYYY HH:MM')}</span>
                    <span>Numero do vôo: {props.lancamento.flight_number}</span>
                </div>
                <div>
                    <iframe width="650px" height="315" src={"https://www.youtube.com/embed/"+props.lancamento.links?.youtube_id} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
        </div>
    );
}