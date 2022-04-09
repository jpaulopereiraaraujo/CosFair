import Deadpool from '../../img/logos/deadpool.gif';
import NavBar from '../components/Navbar';
import FooterComponent from '../components/Footer';




let Home = {
  render: async () => {
    let Navigation = await NavBar.render()
    let view = `
      ${Navigation}
          
          
          <div id ="main-container">
            Venha para a maior feira de cosplayers da america latina,
            com a participação de diversos cosplayers do cenário mundial,
            não perca tempo inscreva-se já.
            <div id="deadpoolgif">
            <img src=${Deadpool}></img>
            </div>
        
          </div>

      ${FooterComponent}
    `
    return view
  },
 
}

export default Home;