// const mysql = require('mysql2');
// const ConnectDB = require('../Config/db');
// const schaeModel = require('../Models/schaema.model');

// const miyaget=()=>{
//     schaeModel.getAllData((data)=>{
//         if(data){console.log(data);
//             try{
//                 return(data);
//             }
//             catch(err){
//                 return(err);
//             }
//         }
//     })
// }
// miyaget();

// exports.create = async(req, res)=>{
//     try{
//         console.log(req.body);
//         const code_user = req.body.code_user;
//         const name_user = req.body.name_user;
//         const time = req.body.time;
//         const report = req.body.report;
//         const report_time = req.body.report_time;
//         const createmiya = ConnectDB.query('INSERT INTO user_tb (code_user, name_user, time, report, report_time) VALUES (?,?,?,?,?)'
//         ,[code_user, name_user, time, report, report_time]);
//         createmiya()
//         res.json(createmiya)
//     }catch(err){
//         console.log(err);
//         res.status(400).send('Server create error');
//     }
// }
// exports.list =  async(req, res)=>{
//     try{
//         console.log(req.body);
//         ConnectDB.query("SELECT * FROM mt900db.user_tb");
//         // listmiya()
//         // res.json(listmiya)
//     }catch(err){
//         console.log(err);
//         res.status(400).send('Server create error');
// }
// }