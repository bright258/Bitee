const MovieDB = require('./models.js')


const aggregate = function(){
    MovieDB.Movie.aggregate([
        {
            $match: {year: {$gte: 2000}}
        },
        {
            $group: {
                _id: "$year",
                total: {$sum: 1}
            }
        }

    ]).exec().then(result=>{
        console.log(result)
    }).catch(err =>{
        console.log(err)
    })
    
 
}

const aggregateUsingUnwind = function(){
    
    MovieDB.Movie.aggregate([
        {
            $unwind: "$cast"
        },

        {
            $match: {cast: "britanny"}
        },

        {
            $group: {
                _id: "$cast",
                total: {$push: "$cast"}
            }
        }, 

       {
            $project: {
                arrayLength: {
                   $size: "$total"
                }
            }
        }

       
    ]).exec().then(result =>{
        
        console.log('Result for unwinding  ', result)
    }).catch(err =>{
        console.log(err)
    })
}

module.exports = {aggregate, aggregateUsingUnwind }

