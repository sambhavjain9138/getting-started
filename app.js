var app=require("express")();

app.get('/',function(req,res){
    res.send("Welcome ,here will we soon update a form .. till then wait");
});





app.listen(5299,function(){
    console.log("server rocks on");
});