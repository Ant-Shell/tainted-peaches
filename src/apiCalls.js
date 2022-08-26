const fetchData = ( pathAddress ) => {
    return fetch( `https://rancid-tomatillos.herokuapp.com/api/v2/${ pathAddress }` )
    .then( response => {
        if( !response.ok ) {
            throw Error( response.text )
        } else {
            return response.json( )
        }
    } )
    .catch( error => console.log( error ) )
}


export default fetchData;