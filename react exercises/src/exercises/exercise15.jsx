import react ,{useContext } from 'react'
import LanguageContext from './Languagecontext'

function Greeting(){
    const language = useContext(LanguageContext);

    const messages = {
        en: 'Hello',
        es: 'Hola',
    }
 return <h1>{messages[language]}</h1>;
}

export default Greeting;