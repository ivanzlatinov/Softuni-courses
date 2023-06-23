let a = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  }
  


  if(/^[\w.]+$/gm.test(a.uri) == true){
 console.log(a.uri)
  }