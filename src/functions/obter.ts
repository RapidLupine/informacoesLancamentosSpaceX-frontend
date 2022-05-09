export function obter<T>(
    url: string
    , definirEstado: React.Dispatch<React.SetStateAction<T>>
    , definirCarregado: React.Dispatch<React.SetStateAction<boolean>>
    , definirErro: React.Dispatch<React.SetStateAction<Error | null>>
) {
    return fetch(url)
        .then((res) => res.json())
        .then(
            (result: T) => {
                definirCarregado(true);
                definirEstado(result);
            },
            (error) => {
                definirCarregado(true);
                definirErro(error);
            }
        );
}
