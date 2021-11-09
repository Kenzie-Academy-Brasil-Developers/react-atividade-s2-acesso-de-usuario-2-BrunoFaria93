import { Link } from 'react-router-dom'


const Home = ( {members} ) => {
    
    function testType(member){
      
        let result = ''
        if(member.type === 'pj'){
            result += `/company/${member.id}`
        }else{
            result += `/customer/${member.id}`
        }
        return result
    }

    return(
        <div>
            <h1>Atividade: Acesso de usuário</h1>
            {members.map((item) => 
            <div>
                
                <Link to={testType(item)}>
                    {item.name}
                </Link>
            </div>)}
        </div>
    )
}
export default Home