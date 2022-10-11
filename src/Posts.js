import { VscGlobe } from 'react-icons/vsc' // instalamos npm install react-icons e importamos


export const Post = ()=> {
    return <button onClick={() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
            //buscar async-await
        }}>
            <VscGlobe/>
            Traer Datos
            </button>
            
            
} 
