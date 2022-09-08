const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = process.env.PORT


app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`Hi, app.js is running on http://localhost:${port}`)
})