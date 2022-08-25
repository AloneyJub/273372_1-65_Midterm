module.exports ={

    app1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input % 2
        res.send(output.toString())
    }

}