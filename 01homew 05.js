2.

let arr = [1,2,3,4,5];
let num=2;
function getCollection(arr){
  if (arr.length === 1) return [arr];
  else {
  	result = getCollection(arr.slice(1));
  	return result.concat(result.map(el => el.concat(arr[0])), [[arr[0]]]); 
     
  }
}

let getCollection((el,num)=> {
  if(el.length===num) {
    return el }
})
3.
function ObjWithMap() {
  this.map = function (fn) {
    let obj={};
    for (let key in this) {
      if (key ==='map') continue
      const newProp=fn(this[key], key, this)
      obj[key]=newProp
    }
    return obj
  }
}
1. Davit jan en vor chi stacvum ev verch, chgitem vordexa sxals
arr = {
  parent:null, id:0,
  parent:0, id:1,
  parent:0, id:2,
  parent:1, id:3,
  parent:1, id:4,
  parent:2, id:5,
  parent:4, id:6
}
  
function findParentNode(obj,node) {
  let data=[];
    for (let keys in obj) {
      if (keys === node.parent) {
        data.push(obj[keys])
      } else if (Array.isArray(obj[keys])) {
        obj[keys].forEach((el) => {findParentNode(el[key], node)
        })
  
      }
    }
  }