let obj = {
  name : 'wkb',
  reading : function(){
    console.log(this.name + 'hello');
  }
}


obj.reading()