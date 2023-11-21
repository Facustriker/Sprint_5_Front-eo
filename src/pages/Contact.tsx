import ContactForm from "../components/ContactPage/ContactForm"
import Header from "../components/Header/Header"
import HeaderLogIn from "../components/Header/HeaderLogIn"
import '../styles/HomePageStyle.css'


const log = localStorage.getItem('tokenLogIn')
const Contact = () => {

    if(log==null){
      return (
        <>
          <Header/>       
          <ContactForm/>
           
        </>
      )
    } else{
      return (
        <>
           <HeaderLogIn/>
          <ContactForm/>
        </>
      )
    }
  
}

export default Contact