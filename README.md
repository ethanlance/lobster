API
====

Super simple API layer build in node.js and express.

Example API
====

http://localhost:1337/v1/api/OBJECT_NAME

Creating an API
====
1. Create OBJECT_NAME.js in /library
2. In places.js paste the following.  

```module.exports = function(req, res) {
    res.send({message:'hello world'});
});```

3. Test the API. In the commandline type: curl http://localhost:8080/v1/api/OBJECT_NAME

```{
    message: "hello world"
}```
