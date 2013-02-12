API
====

The api layer is built in node.js. 

Example
====

http://localhost:8080/v1/api/OBJECT?lat=37.7776274&lon=-122.3943666
server.js will look for the OBJECT in the routes directory and fetch the data. 

Creating an API
====
1. Create a library named after the OBJECT you want to create ie. /routes/places.js
2. In places.js paste the following.  

module.exports = function(req, res) {
    res.send({message:'hello world'});
}); 

3. Test the API. In the commandline type: curl http://localhost:8080/v1/api/OBJECT

The response should be:

{
    message: "hello world"
}
