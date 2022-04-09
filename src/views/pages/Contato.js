import axios from 'axios';
import Navbar from '../components/Navbar';

let Contact = {
  render: async () => {
    let Navigation = await Navbar.render()
    let view = `
    ${Navigation}
    <div id ="main-container">
    <h2 id="cosfairhead">Cadastre-se na CosFair</h2>
    <form id="register-form">
        <div class="full-box">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Digite seu email">
        </div>
        <div class="full-box">
            <label for="phone">Fone</label>
            <input type="phone" name="phone" id="phone" placeholder="Digite seu telefone">
        </div>
        <div class="half-box spacing">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" placeholder="Digite o seu nome.">
        </div>
        <div class="half-box">
            <label for="lastname">Sobrenome</label>
            <input type="text" name="lastname" id="lastname" placeholder="Digite o seu sobrenome.">
        </div>

        <div class="half-box spacing">
            <label for="cosplay">Cosplay</label>
            <input type="text" name="cosplay" id="cosplay" placeholder="Nome do personagem.">
        </div>

        <div class="half-box">
            <label for="gender">Gênero</label>
            <input type="text" name="gender" id="gender" placeholder="Gênero do personagem.">
        </div>
        <div class="full-box">
            <input type="checkbox" name="agreement" id="agreement">
            <label for="agreement" id="agreement-label">Autorizo a CosFair usar minhas
            imagens captadas no evento.
            </label>
            
        </div>

        <div class="full-box">
            <input type="submit" id="submitDataForm" value="Registrar">
            
            
        </div>



        <div></div>


    </form>
    <div></div>

</div>
    `;
    return view
  },
  after_render: async () => {
    document.getElementById('submitDataForm')
    .addEventListener('click', () => {
      let name = document.getElementById('name').value,
          lastname = document.getElementById('lastname').value,
          email = document.getElementById('email').value,
          phone = document.getElementById('phone').value,
          cosplay = document.getElementById('cosplay').value,
          gender = document.getElementById('gender').value
      axios.post('https://webhook.site/fa78049d-9756-4669-b377-fbbda177fd4e', {
        name,
        lastname,
        email,
        phone,
        cosplay,
        gender
      }).then(
        response => {
          if (response.status === 200 || 201){
            alert('Requisição realizada com sucesso!')
            window.open('https://google.com/')
          }
        }
      )
    })
  }
}

export default Contact