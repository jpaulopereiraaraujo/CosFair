import NavBar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Navbar from '../components/Navbar'




let Galery = {
  render: async () => {
    let Navigation = await NavBar.render()
    let view = `
      ${Navigation}
          
          
          <div id ="galery">
            <img src="https://images.pexels.com/photos/65767/pexels-photo-65767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>
            <img src="https://images.pexels.com/photos/1340903/pexels-photo-1340903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>         
            <img src="https://images.pexels.com/photos/950775/pexels-photo-950775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>
            <img src="https://images.pexels.com/photos/922909/pexels-photo-922909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>
            <img src="https://images.pexels.com/photos/3125505/pexels-photo-3125505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>
            <img src="https://images.pexels.com/photos/35797/carnival-mask-costume-panel.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image" >
            </img>
            <img src="https://images.pexels.com/photos/2020891/pexels-photo-2020891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" id="size-image">
            </img>
            </div>
        
          </div>

      ${FooterComponent}
    `
    return view
  },
 
}

export default Galery;