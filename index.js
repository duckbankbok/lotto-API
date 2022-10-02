const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

app.use(cors())

app.get('/lotto', (req, res) => {
    var num_list = range(1, 45)
    var lotto_list = []
    
    for (let i = 0; i < 6; i++) {
        var index = Math.floor(Math.random() * num_list.length)
        var number = num_list.splice(index, 1)
        lotto_list.push(number[0])
    }
    
    lotto_list.sort(function(a, b) {
        return a - b
    })

    res.json({'number': lotto_list})
})

app.listen(port)