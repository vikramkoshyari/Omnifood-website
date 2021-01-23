const express =  require('express');
const app = express();
const path =  require('path');
app.use(express.static(path.join(__dirname, '../OMNIFOOD')))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})




app.listen(3000,()=>{
console.log("app at 3000");

})