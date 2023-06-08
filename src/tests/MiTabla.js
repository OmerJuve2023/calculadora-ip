import "../tests/testStyle.css"
export function MiTabla() {
    const valorComparar = 3;

    const data = [
        { letra: 'a', valor: 1 },
        { letra: 'b', valor: 2 },
        { letra: 'c', valor: 3 },
        { letra: 'd', valor: 4 }
    ];

    return (
        <table>
            <thead>
            <tr>
                <th>Letra</th>
                <th>Valor</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr
                    key={index}
                    className={item.valor === valorComparar ? 'resaltada' : ''}
                >
                    <td>{item.letra}</td>
                    <td>{item.valor}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}