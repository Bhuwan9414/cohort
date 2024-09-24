const http = require("http");

const server = http.createServer(function(req,res){
        res.end("bhuwan suthar")
});

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is running");   
})


const express = require("express");

const port = 3000;

const 