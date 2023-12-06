const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app1 = express() 
app1 .engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app1.set('view engine','handlebars')
app1.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

const products = [
    { name: 'Product 1', Image: '/img/product1.jpeg'},
    { name: 'Product 2', Image: '/img/product2.jpeg'}

]

app1.get('/',(req, res)=> res.render('home',{title: 'Home ',message:'Welcome to uor website!'}))

app1.get('/product',(req,res)=>{
    res.render('products',{products});
})

app1.get('/about',(req,res)=>{
    res.render('about',{title: 'About Us',message:'Learn more about our company!'})
})

app1.use((req,res)=>{
    res.status(404)
    res.render('404')
}
)

app1.use((err,req,res,next)=>{
    console.error(err.messsage)
    res.status(500)
    res.render('500')
}
)

app1.listen(port, ()=> console.log( 
    `Express started on http://localhost:${port};` +
`press Ctrl-C to terminate.` ))