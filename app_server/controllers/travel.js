const tripsEndpoint =  'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept' : 'application/json'
    }
}



// Get Travel view

const travel = async function(req, res, next){
    // console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then(res => res.json())
        .then(json => {
            //consol.log(json);
            let message = null;
            if(!(json instanceof Array)){
                message = 'API lookup error';
                json = {};
            }
            else{
                if(!json.length){
                    message = 'no trips exist in database';

                }
            }
            res.render('travel', {title: 'Travlr Getaways', trips: json, message});

        })
        .catch(err => res.status(500).send(e.message));
        //console.log('TRAVEL CONTROLLER AFTER RENDER');
};

module.exports = {
    travel
}