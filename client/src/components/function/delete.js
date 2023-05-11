const { Axios } = require("axios")

const datedata =(iduser_tb)=>{
    Axios.delete(`http://localhost:5000/delete/${iduser_tb}`).then((respons) => {
        
    })

}