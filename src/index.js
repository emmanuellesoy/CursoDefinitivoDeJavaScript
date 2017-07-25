import page from 'page'

var main = document.getElementById('main-container')

page('/', function(ctx, next){
   main.innerHTML = '<a href="/">Home</a> &bullet; <a href="/signup">Signup</a>'
})

page('/signup', function(ctx, next){
   main.innerHTML = '<a href="/">Home</a> &bullet; <a href="/signup">Signup</a>'
})

page()
