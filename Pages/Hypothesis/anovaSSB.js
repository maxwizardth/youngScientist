function ZcalMean(x,mu,sd,n){
 	  const {se,se_working}=SE(sd,n)
 	  var Zcal= ((x-mu)/se).toFixed(2)
 	  var working=`<p>$\\bar x =${x}, \\mu = ${mu}$ <br><br>
 	  			</p>
 	  			${se_working}
 	  			<p>
 	  			$Z_{cal}=\\frac{\\bar x - \\mu}{SE}$<br>
 	  			$Z_{cal}=\\frac{${x} -${mu}}{${se}}$<br>
 	  			$Z_{cal}=\\frac{${x-mu}}{${se}}$<br>
 	  			$Z_{cal}=${Zcal}$</p>`
      return {working:working,Zcal:Zcal}
}

function ZcalProp(p,p0,n){
	  Zcal=((p-p0)/Math.sqrt(p0*(1-p0)/n)).toFixed(2)
 	  working=`<p>$P_0 =${p0}, P= ${p}, n=${n}$ <br><br>
 	            $Z_{cal}=\\frac{P - P_0}{\\sqrt{\\frac{P_0(1-P_0)}{n}}}$<br><br>
 	            $Z_{cal}=\\frac{${p} - ${p0}}{\\sqrt{\\frac{${p0}(1-${p0})}{${n}}}}$<br>
 	            $Z_{cal}=\\frac{${(p-p0).toFixed(2)}}{\\sqrt{\\frac{${(p0*(1-p0)).toFixed(2)}}{${n}}}}$<br><br>
                $Z_{cal}=\\frac{${(p-p0).toFixed(2)}}{\\sqrt{${(p0*(1-p0)/n).toFixed(2)}}}$<br>
                $Z_{cal}=\\frac{${(p-p0).toFixed(2)}}{${Math.sqrt(p0*(1-p0)/n).toFixed(2)}}$<br><br>
                $Z_{cal}=${Zcal}$
	 </p>`
 	  	return {propWorking:working,Zprop:Zcal}
}

function SE(sd,n){
	let se=(sd/Math.sqrt(n)).toFixed(2)
	let se_working=`
	<p>$s=${sd}, n=${n} $<br>
	 $SE=\\frac{s}{\\sqrt{n}}$<br>
	 $SE=\\frac{${sd}}{\\sqrt{${n}}}$<br>
	 $SE=${se}$ 
	 </p>
	`
return {se:se,se_working:se_working}
}


function ZcalMean2(matrix){
	        newist=matrix.reduce((tr,data)=>[...tr,...data],[])
	        const [x1,x2,s1,s2,n1,n2] =newist
	        var Zcal=((x1-x2)/Math.sqrt((s1**2/n1)+(s2**2/n2))).toFixed(2)
	        var working  =
	           `<p>
	            $\\bar x_1 =${x1},\\bar x_2 =${x2}$<br><br> 
	            $s_1 = ${s1},s_2 =${s2}$<br><br>
	            $n_1 =${n1},n_2 =${n2}$</p>
	            <p>
 	  			$Z_{cal}=\\frac{\\bar x_1 - \\bar x_2}{\\sqrt{\\frac{S_1^2}{n_1}+\\frac{S_2^2}{n_2}}}$<br><br>
 	  			$Z_{cal}=\\frac{${x1} - ${x2}}{\\sqrt{\\frac{${s1}^2}{${n1}}+\\frac{${s2}^2}{${n2}}}}$<br><br>
 	  			$Z_{cal}=\\frac{${(x1 - x2).toFixed(2)}}{\\sqrt{${(s1**2/n1).toFixed(3)}+${(s2**2/n2).toFixed(3)}}}$<br><br>
 	  			$Z_{cal}=\\frac{${(x1 - x2).toFixed(2)}}{\\sqrt{${((s1**2/n1)+(s2**2/n2)).toFixed(2)}}}$<br><br>
 	            $Z_{cal}= ${Zcal}$
 	  			</p>
 	  			`
   document.getElementById("ci").innerHTML=working
      return {working:working,Zcal:Zcal}
}

function ZcalProp2(matrix){
	  newist=matrix.reduce((tr,data)=>[...tr,...data],[])
	  const [p1,p2,n1,n2] =newist
	  var Zcal=((p1-p2)/Math.sqrt(p1*(1-p1)/n1+p2*(1-p2)/n2)).toFixed(2)
 	  working=`<p>$P_1 =${p1}, n_1=${n1}$ <br><br>
 	            $P_2 =${p2}, n_2=${n2}$ <br><br>
 	            $Z_{cal}=\\frac{P_1 - P_2}{\\sqrt{\\frac{P_1(1-P_1)}{n_1}+\\frac{P_2(1-P_2)}{n_2}}}$<br><br>
 	            $Z_{cal}=\\frac{${p1} - ${p2}}{\\sqrt{\\frac{${p1}(1-${p1})}{${n1}}+\\frac{${p2}(1-${p2})}{${n2}}}}$<br><br>
				$Z_{cal}=\\frac{${(p1-p2).toFixed(2)}}{\\sqrt{\\frac{${p1}*${1-p1}}{${n1}}+\\frac{${p2}*${1-p2}}{${n2}}}}$<br><br>
 	            $Z_{cal}=\\frac{${(p1-p2).toFixed(2)}}{\\sqrt{${(p1*(1-p1)/n1).toFixed(3)}+${(p2*(1-p2)/n2).toFixed(3)}} }$<br><br>
 	            $Z_{cal}=\\frac{${(p1-p2).toFixed(2)}}{\\sqrt{${((p1*(1-p1)/n1)+p2*(1-p2)/n2).toFixed(2)}} }$<br><br>
 	            $Z_{cal}=\\frac{${(p1-p2).toFixed(2)}}{${Math.sqrt(p1*(1-p1)/n1+p2*(1-p2)/n2).toFixed(2)}}$<br><br>
                $Z_{cal}=${Zcal}$
	           </p>`
	  document.getElementById("ci").innerHTML=working
 	 return {propWorking:working,Zprop:Zcal}
}



