const createService = require('./services')

const createController =  async (req, res)=>{
    try{
        const product =  await createService(req.body)
        return res.status(201).json(product)


    }catch(e){
        console.log(e.message)

    }


}

module.exports = createController