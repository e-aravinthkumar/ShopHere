const fs = require('fs');
const path = require('path');



let products = [];
let p = path.join(path.dirname(process.mainModule.filename)+'/data/productData.json');

const readDataFile = cb =>{
    fs.readFile(p, (err, data)=>{
            if(!err){
                products = JSON.parse(data);
                return cb(products);
            }
            else{
                return cb([]);
            }
        })    
}

module.exports = class Product{
    constructor(productName){
        this.name = productName
    }

    save(){
        readDataFile(products =>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err)=>console.log(err));
        });
    }

    static fetchAll(cb){
       readDataFile(cb);
    }
}