import page from 'page'

const main = document.getElementById('main-container')

page('/', function(ctx, next){
   main.innerHTML = '<a href="/signup">Signup</a>'
})
