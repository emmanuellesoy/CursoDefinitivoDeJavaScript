import yo from 'yo-yo'

module.exports = yo`<div class="container">
   <div class="row">
      <div class="col s10 push-s1">
         <div class="row">
            <div class="col m5 hide-on-small-only">
               <img src="iphone.png" alt="" class="responsive-img">
            </div>
            <div class="col s12 m7">
               <div class="row">
                  <div class="signup-box">
                     <h1 class="platzigram">Platzigram</h1>
                     <form action="" class="signup-form">
                        <h2>Regístrate para ver fotos de tus amigos</h2>
                        <div class="section">
                           <a class="btn btn-fb hide-on-small-only" href="">Iniciar sesión con Facebook</a>
                           <a class="btn btn-fb hide-on-med-and-up" href="">Iniciar sesión</a>
                        </div>
                        <div class="divider"></div>
                        <div class="section">
                           <input type="email" name="email" placeholder="Correo electrónico">
                           <input type="text" name="name" placeholder="Nombre completo">
                           <input type="text" name="username" placeholder="Nombre de usuario">
                           <input type="password" name="password" placeholder="Contraseña">
                           <button class="btn waves-effect waves-light blue darken-4" type="submit">Regístrate</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="row">
                  <div class="login-box">
                     ¿Ya  tienes una cuenta? <a href="/signin">Entrar</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>`
