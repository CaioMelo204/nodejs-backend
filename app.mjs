import express from 'express';
import chalk from 'chalk'
import morgan from 'morgan';
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './public')
app.set('view engine', 'ejs')


app.get('/', (_, res) => {
    res.render('index', { title: 'Welcome to globomantics' })
})
app.get('/', (_, res) => {
    res.send('hello world!!!')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`listen o port ${chalk.green(process.env.PORT || 3000)}`)
})