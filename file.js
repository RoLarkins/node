const fs = require('fs');


// reading files
fs.readFile("./docs/blog.txt", (err,data) =>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
});

console.log('last line')


//writing files
fs.writeFile('./docs/blog.txt', 'Hello world', () => {
   // console.log('file was written');
}
);
fs.writeFile('./docs/blog2.txt', 'Hello universe', () => {
    //console.log('file was written');
}
);


//directories
if(!fs.existsSync('./assests')){ 
fs.mkdir('./assests', err =>{
    if(err){
        console.log(err)
        }
        console.log('folder created');
    
    });
} else {
    fs.mkdir('./assets',  (err) => {
        if (err){
            console.log(err)
        }
        console.log('folder deleted');
    });
} 
//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}