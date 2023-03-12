/*function to sum all value in array*/  
function sumArray(array,dp=4){
  var result=0
  array.forEach((value)=>{result=result+Number(value)})
  return result.toFixed(dp)
  }

 function MargeArray(array,conjuction){
  var result=''
  array.forEach((value)=>{result=result+value+conjuction})
  return result.slice(0,-1)
  }

 function tableRow(tableArray,rootId,){
    var allRows=tableArray.map((row,index)=>{
      return row.reduce((tr,data)=>{
      return `${tr}<td class="styleTd">${data}</td>`},'')}).
    reduce((tr,data)=>{return `${tr}<tr>${data}</tr>`},'')
    return allRows
  }

var transpose=(Matrix)=>Matrix[0].map((col,c)=>Matrix.map(row=>row[c]))
function removeEmpty(arr,value){
 return arr.filter((el)=>el!=value&&el!=undefined)
}
function removeEmptyFromMatrix(Matrix,value) {
  return Matrix.map((arr)=>removeEmpty(arr,value))
}

function sd(arrayDat,dp=3){
let arrayData=arrayDat
let sum=sumArray(arrayData)
let n=arrayData.length
let mean=(sum/n).toFixed(dp)
let dev=arrayData.map(data=>(data-mean).toFixed(dp))
let sqDev=dev.map(data=>(data*data).toFixed(dp))
let sumSqDev=sumArray(sqDev)
let variance=sumSqDev/n
let std=Math.sqrt(variance)
return {sum:sum,n:n,mean:mean,dev:dev,sqDev:sqDev,
        sumSqDev:sumSqDev,variance:variance,std:std,
        sdTable:transpose([[...arrayData,sum],[...dev,0],[...sqDev,sumSqDev]])}}

/*function to get the list of mean*/
function MeanArray(arrayDat,dp=3){
let means=arrayDat.map((row,col)=>{
  let sum=sumArray(row)
  let n=row.length
  let mean=(sum/n).toFixed(dp)
   return mean})
return means}


/*funciton to add column to table*/
function addColumn(classname){
    allRow=document.getElementsByClassName(classname)
    noOfRow=allRow.length
    var col=allRow[1].childElementCount
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Col-${col}</i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 1; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <th class="head">    
                            <input type="number" class="input" style="width: 100%;">
                        </th>`}
}

function RemoveColumn(classname){
    allRow=document.getElementsByClassName(classname)
    noOfRow=allRow.length
    var col=allRow[1].childElementCount
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Col-${col}</i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 2; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <th class="head">    
                            <input type="number" class="input" style="width: 100%;">
                        </th>`}
}

function addColumn1(classname){
    allRow=document.getElementsByClassName(classname)  
    var col=allRow[1].childElementCount+1
    noOfRow=allRow.length
    allRow[0].innerHTML+=`<th class="head">
                            <p class="heading"><i>Column ${col} </i></p>
                            <input type="number" class="input">
                        </th>`
    for (var i = 1; i <noOfRow; i++) {
        allRow[i].innerHTML+=` <td>
                        <input type="number" class="input">
                        </td>`
    }
}


function RemoveColumn1(classname){
   var allRow=document.getElementsByClassName(classname)  
    var noOfRow=allRow.length
    for (var i = 0; i <noOfRow; i++) {
        allRow[i].removeChild(allRow[i].lastElementChild)    }
}


function addRow(id='twoWay',classname='dataRows2') {
    let oneWayTable=document.getElementsByClassName(classname)
    let row=oneWayTable.length+1
    var col=oneWayTable[1].childElementCount
    var tds=`<td><i class="row">R-${row}</i></td>`
    while(col>2){
      tds+=`<td><input type="number" class="input"></td>`
      col--}
    document.getElementById(id).innerHTML+= 
     `<tr class="dataRows2">
          ${tds}
      <th class="head">
            <input type="number" class="input">
        </th>
      </tr>`}


function addRow1(classname='dataRows1',id='oneWay') {
    oneWayTable=document.getElementsByClassName(classname)[1]
    var col=oneWayTable.childElementCount
    var tds=`<td><input type="number" class="input"></td>`
    while(col>1){
      tds+=`<td><input type="number" class="input"></td>`
      col--}
    document.getElementById(id).innerHTML+= 
     `<tr class="dataRows1">
          ${tds}
      </tr>`
    }


function RemoveRow1(id='oneWay') {
    let table=document.getElementById(id)
    let tbody=table.children[0]
    tbody.removeChild(tbody.lastElementChild)
    }
/* Function to generate analysis report table */
function Report(){
  var table=`<button class="details" onclick="ShowDetails()">Show full details</button>`
document.getElementById('summary').innerHTML=table
}


function Marge2Array(array1,array2,conj1,conj2){
  var result=''
  array1.forEach((value,index)=>{
    result=result+value+conj1+array2[index]+" "+conj2+" "})
  console.log(result)
  return result.slice(0,-2)
  }






