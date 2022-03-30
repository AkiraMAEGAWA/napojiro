const express = require("express")
const app = express()


const port = 3001
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.post("/nyaon", (req, res) => {
    
    const deviceController = require("./notifyController")
    const googleHomeIP = process.env.PUBLIC_NEXT_LOCAL_GOOGLEHOME_HOST
    deviceController.ondeviceup(googleHomeIP)

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).send('ok')
})
