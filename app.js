const bodyParser = require('body-parser')
const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const routes = require('./routes')
const session = require('express-session')
const usePassport = require('./config/passport')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const port = process.env.PORT


app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

usePassport(app)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`Hi, app.js is running on http://localhost:${port}`)
})