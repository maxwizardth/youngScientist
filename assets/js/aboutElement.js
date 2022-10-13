
function allTeam(InstructorsArray){
InstructorsArray.forEach((Instructor)=>{document.getElementById('allTeam').innerHTML+=`
<div class="col-lg-3 col-md-6 team-wrap">
	<div class="team-info text-center">
		<div class="column position-relative">
			<a href="#url"><img src="../assets/images/${Instructor.img}.jpg" alt="" class="img-fluid team-image"></a>
		</div>
		<div class="column">
			<h3 class="name-pos"><a href="#url">${Instructor.name}</a></h3>
			<p>${Instructor.course} Instructor</p>
			<div class="social">
				<a href="#facebook" class="facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
				<a href="#twitter" class="twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
			</div>
		</div>
	</div>								
</div>
<!-- end team member -->`})
}

var allInstructor=[{name:'Abdullahi Maxwizard',img:'team1',course:'Mathematics'},
				   {name:'Salaudeen ',img:'team2',course:'English'},
				   {name:'Ayobami Ogundiran',img:'team3',course:'Coding'},
				   {name:'Marko Dugon',img:'team4',course:'Chemistry'},
				   {name:'Abdullahi Maxwizard',img:'team5',course:'Physics'},
				   {name:'Funsho D. Scribe',img:'team7',course:'Literature'}]
allTeam(allInstructor)