let pairs= [
    [ 1, { name: 'Nicolas' } ],
    [ 2, { name: 'Felipe' } ],
    [ 3, { name: 'Chanchito' } ]
  ]

function toCollection(arr){
    newArr=[]
    for (i in arr){
      let elem = arr[i]
      newArr[i]={id:elem[0],name:elem[1].name}
    }
    return newArr}

/*Con push y if en el for, con el in la i vale 0,1,2,ect y con of la i vale lo que haya en el Array
function toCollection(arr){
  let newArr=[]
  let id=0
  for (i of arr){
    newArr.push({id:i[0],name:i[1].name})
    
  }
  return newArr
}*/
let result = toCollection(pairs)
console.log(result)