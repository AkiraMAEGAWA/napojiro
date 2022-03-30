const express = require("express")
const app = express()


const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post("/nyaon", (req, res) => {
    
    const deviceController = require("./notifyController")
    // const googleHomeIP = process.env.LOCAL_GOOGLEHOME_HOST
    const googleHomeIP = "192.168.3.6"
    deviceController.ondeviceup(googleHomeIP)

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send('ok')
})
