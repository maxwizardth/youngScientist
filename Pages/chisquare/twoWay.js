squareArray=(array)=>array.map((value)=>(value*value).toFixed(2))
squareMatrix=(matrix)=>matrix.map(array=>squareArray(array))

 function MargeSquare(array,j,conj){
  var result=''
  array[j].forEach((value,index)=>{result=result+
    `\\frac{${value}${conj}}{${array[j+2][index]}}+`})
  return result.slice(0,-1)
  }

  function SumSquare(array,j){
  var sqn=array[j].map((value,index)=>
    (value**2/array[j+2][index]).toFixed(2))  
  return {sqn:sqn,sumSqn:sumArray(sqn)} 
  }

  function allSum(matrix,dp=2){
 let rowSums=matrix.map((row)=>sumArray(row,dp))
 let colSums=transpose(matrix).map((row)=>sumArray(row,dp))
 let grndSums=sumArray(rowSums,dp)
 return {grandSums:grndSums,rowSums:rowSums,
          colSums:colSums}
}

function transformData(matrix,dp=2){
  const {colSums,rowSums,grandSums}=allSum(matrix)
  let colVar=colSums.map((row,index)=>`<b>C <sub>${index+1}</sub></b>`)
 var transform=matrix.map((row,index)=>[`<b>R<sub> ${index+1}</sub></b>`,...row,sumArray(row,dp)])
transform=[[' ',...colVar,'<b>Total</b>'],...transform,
    ['<b>Total</b>',...colSums,`<b>${grandSums}</b>`]] 
return transform
}


function chisqData(arrayDat,dp=2){
    let rowSum=allSum(arrayDat)['rowSums']
  let grandSum=sumArray(rowSum,dp)
  let ncol=arrayDat.map((row)=>row.length)
  let nrow=transpose(arrayDat).map((row)=>row.length)
  let colSum=allSum(arrayDat)['colSums']
  let N=colSum.length*rowSum.length
  let df=(ncol[0]-1)*(nrow[0]-1)
  let colVar=colSum.map(()=>'Col')
var tableSum=[rowSum,colSum,nrow,ncol]

var expTable=arrayDat.map((row,i)=>
    row.map((col,j)=>(rowSum[i]*colSum[j]/grandSum).toFixed(2)))


var error=arrayDat.map((row,i)=>
    row.map((col,j)=>(col-expTable[i][j]).toFixed(2)))

var errorSq=squareMatrix(error)
var chi=errorSq.map((row,i)=>
    row.map((col,j)=>(col/expTable[i][j]).toFixed(2)))
let addition=chi.map((row)=>sumArray(row,dp))
console.log('addition')

var chiSq=sumArray(addition)

var result= {tableSum:tableSum,
    grandSum:grandSum,N:N,'originalData':arrayDat,
    expTable:expTable,error:error,errorSq:errorSq,
    chi:chi,chiSq:chiSq,df:df,nrow:nrow,ncol:ncol,
    }
    console.log(result)
    return result
}

function createTable(tablerow){
return `<table class='std' border=2 
            style="margin-left:-14px;">
             ${tableRow(tablerow)}
             </table>`
}
function ChiSq(data){
 const {tableSum,grandSum,N,
  originalData, expTable, error,
  errorSq, chi, chiSq, df,nrow,ncol}=chisqData(data)
 let table= `
             <p id='hypothesis'><b>H<sub>0:</sub> Variable1 (column) and variable2 (Rows) are not related in the population;<br><br>
              H<sub>a</sub>: Variable1 (column) and  variable2 (Rows) are related in the population
              </b></p>

             <div class='eachWork'>
            <h3 style="margin-left:-14px;">Observed values (O)</h3>
             ${createTable(transformData(originalData))}
             </div>

             <div class='eachWork'>
             <h3 style="margin-left:-14px;">Expected values (E)</h3>
             ${createTable(transformData(expTable))}
             </div>

             <div class='eachWork toggle'>
             <h3 style="margin-left:-14px;">error value (O-E)</h3>
             ${createTable(transformData(error))}
             </div>

             <div class='eachWork toggle'>
            <h3 style="margin-left:-14px;">err-square $(O-E)^2$</h3>
             ${createTable(transformData(errorSq))}
            </div>

             <div class='eachWork' >
            <h3 style="margin-left:-14px;">X of CHI-Sq $\\frac{(O-E)^2}{E}$</h3>
             ${createTable(transformData(chi))}
             <h3>$X^2 =\\sum \\frac{(O-E)^2}{E}$<br>
            $X^2 =${chiSq}$</h3>
            </div>

            
            <p class='toggle'>df=(r-1)(c-1)<br><br>
              r=${nrow[0]}, c=${ncol[0]}<br><br>
              df=(${nrow[0]}-1)(${ncol[0]}-1)<br><br>
              df=${nrow[0]-1}*${ncol[0]-1}<br><br>
              df=${df}
            `
document.getElementById('check').innerHTML=table
document.getElementById('check').style.display='block'

}