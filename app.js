const express=require('express');
const bodyParser=require('body-parser');
const date=require(__dirname+'/date.js');
const app=express();
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('Public'));

let items=['Buy Food', 'Make Food', 'Eat Food'];
let workl=[];
app.get('/',function(req,res){
    let day=date.getDate();
    res.render('list',{
        head:day,
        newItems:items
    });
});
app.post('/',function(req,res){
    let item=req.body.newItem;
    if(req.body.list==='Work List'){
        workl.push(item);
        res.redirect('/work');
    }
    else{
        items.push(item);
        res.redirect('/');
    }
});
app.get('/work',function(req,res){
    res.render('list',{
        head:'Work List',
        newItems:workl
    });
});

app.listen(3000,function(){
    console.log("Server has started on port 3000")
})