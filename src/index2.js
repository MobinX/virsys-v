let app = require('../build/server').default;
const port = process.env.PORT || 9000;
app();
// app.listen(port,(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(`Starting App on ${port}`);
// })