import axios from 'axios'

let test = await axios
    .get('http://192.168.1.64:7777/')
    .then((res) => console.log(res.data))
let test1 = await axios
    .get('http://192.168.1.64:7777/aboutme')
    .then((res) => console.log(res.data))
let test2 = await axios
    .get('http://192.168.1.64:7777/aboutyou')
    .then((res) => console.log(res.data))
let test3 = await axios
    .get('http://192.168.1.64:7777/vote/17')
    .then((res) => console.log(res.data))
let test4 = await axios
    .get('http://192.168.1.64:7777/palindrome/anna')
    .then((res) => console.log(res.data))
let test5 = await axios
    .get('http://192.168.1.64:7777/oddtest/2')
    .then((res) => console.log(res.data))
