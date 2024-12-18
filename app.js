const express = require('express')
const app = express()
const path = require('path')
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/mainRoutes.js'))

app.listen(3000, () => {
    console.log(`App listening on port 3000`)
})