function callback(){
    console.log(`inside callback`);
}

function executor(resolve,reject){
    console.log('before');
    
    setTimeout(resolve,2000);

    console.log('after');
}