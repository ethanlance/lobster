API
====

Super simple API layer build in node.js and express.

Getting Started
====
1. npm install
2. node server.js
3. curl http://localhost:1337/v1/api/lobster

Example API
====

Request
----
http://localhost:1337/v1/api/lobster

Response
----
```{
    message: "hello world"
}```

Creating an API
====
1. Create lobster.js in /library.
2. Create a module with a handler.
```module.exports = function(req, res) {
    res.send({message:'hello world'});
});```
3. Test the API. 
```curl http://localhost:8080/v1/api/OBJECT_NAME```
