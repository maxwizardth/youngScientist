function sdBtw(arrayDat,dp=3){
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
        sdTable:transpose([[...arrayData,sum],[...dev,0],[...sqDev,'']])}}

function SSbtw(array,idElement,dp,ij){
    let sdDetails=sdBtw(array)
    let sdTable=sdDetails.sdTable

let table=`<table class='std' border=2 
            style="border-collapse: collapse;
           text-align: center;">
            <tr>
             <th class="styleTh">$x_${ij}$</th>
             <th>$x_${ij}-\\bar x_${ij}$</th>
             <th>$(x_${ij}-\\bar x_${ij})^2$</sup>
             </tr>
             ${tableRow(sdTable)}
             </table>`

let Rough1=`
             <p>
                $\\bar x_{btw}=\\frac{\\sum \\bar x_n}{n}$<br><br>
                $\\bar x_{btw}=\\frac{(\\bar x_1 + \\bar x_2+\\bar x_3...+\\bar x_n )}{n}$<br><br>
                $\\sum \\bar x_n=${sdDetails.sum}$<br><br>
                $n=${sdDetails.n}$<br><br>
                $\\bar x_{btw}=\\frac{${sdDetails.sum}}{${sdDetails.n}}$<br><br>
                $\\bar x_{btw}=${sdDetails.mean}$<br>
                $SSB=n_1(\\bar x_1- \\bar x_{btw})^2+
                    n_2(\\bar x_2- \\bar x _{btw} )^2 + 
                    n_3(\\bar x_3- \\bar x _{btw} )^2 +
                    ....+n_n(\\bar x_n- \\bar x _{btw} )^2$

              </p>
             `

document.getElementById(idElement).innerHTML+=`<div class="eachWork">
     <h4>Mean and Sum of Square $X_{${ij}}$</h4>`+table+Rough1+'</div>';
     return sdDetails}

function Marge2Array(array1,array2,conj1,conj2){
  var result=''
  array1.forEach((value,index)=>{
  	result=result+value+conj1+array2[index]+" "+conj2+" "})
  console.log(result)
  return result.slice(0,-2)
  }

/*function to calculate the Sum of Square Between the Groups*/
function SSB(array){
var check=document.getElementById('check');
let devSq= SSbtw(MeanArray(array),'check',2,'B').sqDev
console.log(devSq) 
let allN=[]
let ssbSum=devSq.map((sqdev,len)=>{
allN.push(array[len].length)
	return devSq[len]*array[len].length})
check.innerHTML+='SSB = '+Marge2Array(allN,devSq,'*',"+")+'<br>'
let ssb=sumArray(ssbSum)
check.innerHTML+='SSB = '+ssb
AnovaTable.SSB=Number(ssb)
AnovaTable.dfb=MeanArray(array).length-1;
AnovaTable.dft=AnovaTable.dft-1;
AnovaTable.dfw=AnovaTable.dft-AnovaTable.dfb;
AnovaTable.SST=(AnovaTable.SSB+AnovaTable.SSW).toFixed(3)
AnovaTable.MSB=AnovaTable.SSB/AnovaTable.dfb
AnovaTable.MSB=Number((AnovaTable.SSB/
AnovaTable.dfb).toFixed(3))
AnovaTable.MSW=Number((AnovaTable.SSW/
    AnovaTable.dfw).toFixed(3))
AnovaTable.F=Number((AnovaTable.MSB/
    AnovaTable.MSW).toFixed(3))
}

