let NavBar = {
  render: async () => {
    let view = `
      <nav>
        <div>
          <h1>Cabeçário</h1>
          <a href="/#">Home</a>
          <a href="/#/contato">Entrar em contato</a>
          <a href="/#/Galeria">Galeria</a>
         
        </div>
      </nav>
    `
    return view
  },
  after_render: async () => {
    console.log('Navbar!')
  }
}

export default NavBar