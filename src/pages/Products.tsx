import Header from "../components/Header/Header"
import '../styles/HomePageStyle.css'
import Section from "../components/ProductsPage/Section"
import HeaderLogIn from "../components/Header/HeaderLogIn"

const log = localStorage.getItem('tokenLogIn')


const Products = () => {
  console.log(log);
  if(log==null){
    return (
      <>
        <Header/>
          <Section/>
        <Section/>
        <Section/>
      </>
    )
  } else{
    return (
      <>
        <HeaderLogIn/>       
        <Section/>
        <Section/>
        <Section/>
      </>
    )
  }
}


export default Products