const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app1 = express() 
app1 .engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app1.set('view engine','handlebars')
app1.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

app1.get('/',(req, res)=> res.render('home'))

// const fortunes =[
//     "Rivers need spings",
//     "Rivers need spings1",
//     "Rivers need spings2",
//     "Rivers need spings3"

// ]

app1.get('/about',(req,res)=>{
    // const randomFortune = fortunes[Math.floor(Math,random()*fortunes.length)]
    res.render('about')
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