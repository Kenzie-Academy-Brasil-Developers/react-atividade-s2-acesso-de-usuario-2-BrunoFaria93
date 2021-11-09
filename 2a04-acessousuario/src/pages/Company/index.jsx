import { Link, useParams } from "react-router-dom"

const Company = ({members}) => {
    const { id } = useParams()
    const membro = members.filter((item) => item.id === id)
    return(
        <div>
            <h1>Detalhes da Empresa</h1>

            <p>
            Nome da empresa: {membro.map((item) => item.name)}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}
export default Company