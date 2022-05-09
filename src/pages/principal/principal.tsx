import React, { useEffect, useState } from 'react';
import './principal.css';
import { ILancamento } from '../../interfaces/ILancamento';
import { Lancamento } from '../../components/lancamento/lancamento';
import { obter } from '../../functions/obter';

export function Principal() {
  const [error, setError] = useState<Error| null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ultimoLancamento, setUltimoLancamento] = useState<Partial<ILancamento>>({});
  const [proximoLancamento, setProximoLancamento] = useState<Partial<ILancamento>>({});

  useEffect(() => {
    const url = (process.env.REACT_APP_BACKEND as string);
    obter(url + '/ultimo', setUltimoLancamento, setIsLoaded, setError);
    setIsLoaded(false);
    obter(url + '/proximo', setProximoLancamento, setIsLoaded, setError);
        
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
        <div className='container'>
            <Lancamento lancamento={ultimoLancamento} />
            <Lancamento lancamento={proximoLancamento} />
        </div>
    );
  }
}
