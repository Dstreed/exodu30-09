// import de express
import express from 'express'

// definition de notre app
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.64' // my local ip on my network

// le port d'écoute de notre serveur
const PORT = 7777

// POST sur la racine
app.get('/', (req, res) => {
    res.send('Exercices express partie 1')
})

// GET sur '/aboutme' retourne Welcome'
app.get('/aboutme', (req, res) => {
    res.send('Welcome')
})

// GET sur '/aboutyou' l'ip et le navigateur de l'utilisateur'
app.get('/aboutyou', (req, res) => {
    let ip = req.ip
    let nav = req.headers['user-agent']
    res.send(`Votre Ip est ${ip} et votre navigateur est ${nav}`)
})

// GET sur '/vote/:age' retourne si vous pouvez voté ou non'
app.get('/vote/:age', (req, res) => {
    let age = req.params.age

    if (isNaN(age) || age < 0 || age > 100) {
        res.send('Please enter a valid age')
    } else if (age < 18) {
        res.send(`Sorry, you are a minor, you cannot vote`)
    } else res.send(`You are an adult, you can vote`)
})

app.get('/palindrome/:word', (req, res) => {
    let word = req.params.word

    if (word === word.split('').reverse().join('')) {
        res.send(`${word} is a palindrome`)
    } else {
        res.send(`${word} is not a palindrome`)
    }
})

app.get('/oddtest/:nb', (req, res) => {
    let nb = Number(req.params.nb)

    if (isNaN(nb)) {
        res.send(`Error: ${nb} is not a number`)
    }

    res.send(nb % 2 === 0 ? `${nb} est pair` : `${nb} est impair`)
})

// démarrage de notre serveur sur le port 7777
app.listen(PORT, IP_LOCAL, () => {
    //exécution d'un affichage au lacement du serveur.
    console.log(`Example app listening at http://localhost:${PORT}`)
})
