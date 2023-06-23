function a (){
    console.log(1);
    try {
    throw new Error('stop!')
    }catch(err){
        console.log(`error -> ${err}`);
          console.log(err)
    }
    console.log(2);
  
}


a();