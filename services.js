const MovieDB = require('./models')




const createService = async (body)=>{

    try{
        const movie = await MovieDB.Movie.create({
            title: body.title,
            director: body.director,
            year: body.year,
            cast: body.cast
        })

       return movie
        

    }catch(e){
        console.log(e)


    }
    



}

module.exports = createService