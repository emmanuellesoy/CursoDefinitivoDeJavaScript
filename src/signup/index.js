import page from 'page'
import empty from 'empty-element'
import template from './template'

const main = document.getElementById('main-container')

page('/signup', function(ctx, next){
   empty(main).appendChild(template)
})
