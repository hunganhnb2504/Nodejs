const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app1 = express()
app1.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))

app1.set('view engine', 'handlebars')
app1.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

const newsData = [
    {
        title: 'Tin tức 1',
        content: 'Man United chiêu mộ thủ môn AC Milan thay thế Onana?',
        image: '/img/mu.jpg',
        link: 'https://baomoi.com/man-united-chieu-mo-thu-mon-ac-milan-thay-the-onana-c47737091.epi'
    },
    {
        title: 'Tin tức 2',
        content: 'Lịch thi đấu bóng đá hôm nay 7/12 và sáng 8/12: Lịch thi đấu Ngoại hạng Anh vòng 15 - Tottenham vs West Ham; lịch thi đấu Ligue 1',
        image: '/img/lich.jpg',
        link: 'https://baomoi.com/lich-thi-dau-bong-da-hom-nay-7-12-va-sang-8-12-lich-thi-dau-ngoai-hang-anh-vong-15-tottenham-vs-west-ham-lich-thi-dau-ligue-1-c47736102.epi'
    },
    {
        title: 'Tin tức 3',
        content: 'Dự đoán tỷ số, đội hình xuất phát trận Sheffield - Liverpool',
        image: '/img/dudoan.jpg',
        link: 'https://baomoi.com/du-doan-ty-so-doi-hinh-xuat-phat-tran-sheffield-liverpool-c47735346.epi'
    }
];

app1.get('/', (req, res) => res.render('home', { news: newsData }))



app1.get('/contact', (req, res) => {
    res.render('contact')
})

app1.use((req, res) => {
    res.status(404)
    res.render('404')
}
)

app1.use((err, req, res, next) => {
    console.error(err.messsage)
    res.status(500)
    res.render('500')
}
)

app1.listen(port, () => console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl-C to terminate.`))