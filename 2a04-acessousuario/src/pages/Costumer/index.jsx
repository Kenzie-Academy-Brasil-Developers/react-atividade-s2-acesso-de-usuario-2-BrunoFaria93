import { Link, useParams } from "react-router-dom"
const Custumer = ({members}) =>{
    const { id } = useParams()
    const membro = members.filter((item) => item.id === id)

    return(
        <div>
            <h1>Detalhes do Cliente</h1>

            <p>
                Nome do cliente: {membro.map((item) => item.name)}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}
export default Custumer