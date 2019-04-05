var a=require("./a");
var b=require("./b");
var server=require("./server");
var obj={a:a,b:b};
server.start(obj);