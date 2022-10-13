function motivationPics(qoutes){
	document.getElementById('motivation').innerHTML=''
	for(var i=0;i<qoutes.length;i++){
		let status=i==0?'active':`team${i+1}`
		document.getElementById('motivation').innerHTML+=`
		<div class="carousel-item ${status}">
          <div class="container">
            <div class="carousel-caption">
              <h3>${qoutes[i].h3}</h3>
              <p>${qoutes[i].p}</p>
              <div class="button-4 mx-auto">
                <div class="eff-4"></div>
                <a href="services.html"> View Courses</a>
                </div>
              
            </div>
          </div>
        </div>
        `
	}
}
var allMotivations= [{h3:'Motivated by the desire to Achieve greatly',p:'they get their doubts solved instantly 24x7'},
					{h3:'One class can change everything',p:'we believe that every student is unique'},
					{h3:'Better learning function better results',p:'We believe if students were taught well they would do well'},
					{h3:'A trial is enough to convince you',p:'every student is a genius'}]

motivationPics(allMotivations)


function toLearn(toLearnArray){
	for(var i=0;i<toLearnArray.length;i++){
		const {course,description}=toLearnArray[i]
	document.getElementById('toLearn').innerHTML+=
	`<div class="col-lg-3 col-md-6 imghrs">
          <a class="imghr" href="#toLearn"><img src="../assets/images/${i+1}.jpg" class="img-fluid" alt="">
            <div class="details"><span class="title">${course}</span><span class="info">${description}</span></div>
          </a>
        </div>`}
}

var toLearnItem=[{course:'Web Development',description:'Add discription'},
                  {course:'Graphics Design',description:'Add discription'},
				  {course:'Data Analysis',description:'Add discription'},
				  {course:'Mathematics',description:'Add discription'}]

toLearn(toLearnItem)


function coursesCard(courses){
	for(var i=0;i<courses.length;i++){
	document.getElementById('coursesCard').innerHTML+=`
        <div class="col-md-3 filter photo">
          <div class="each-item">
            <a href='${courses[i].href}'><img class="port-image img-fuild" src="../assets/images/p${i+1}.jpg" alt="" /></a>

          </div>
          <div class="course-content">
            <div class="course-info">
              <h6><a class="course-instructor" href="#">${courses[i].instructor}</a></h6>
              <a href="#" class="course-title-wrapper">
                <h3 class="course-title" data-gal="prettyPhoto[gallery]">${courses[i].course}</h3>
              </a>
            </div>
            <div class="course-divider">
              <div class="course-meta grid"><span class="course-students" title=""><span
                    class="fa fa-user" aria-hidden="true"></span> ${courses[i].user}</span>
                <span class="course-reviews" title=""><span class="fa fa-thumbs-o-up"
                    aria-hidden="true"></span> ${courses[i].like}</span>

             </div>
              <button class="price-course btn"> $${courses[i].price} </button>
            </div>
          </div>
        </div>
 	`}
 } 

var allCourses=[{href:'base',instructor:'Ayobami Ogundiran',course:'Web Development',user:'30K',like:'22K',price:'50'},
				{href:'vv',instructor:'Abdullahi Maxwizard',course:'Data Analysis',user:'15k',like:'33k',price:'25'},
				{href:'',instructor:'Abdullahi Maxwizard',course:'Real Life Statistics',user:'4k',like:'3k',price:'Free'},
				{href:'',instructor:'Abdullahi Maxwizard',course:'Algebra',user:'2k',like:'2M',price:'Free'}]
coursesCard(allCourses)


 function testimonialStudent(testimonial){
	for(var i=0;i<testimonial.length;i++){
		let status=i==0?'active':`team${i+1}`
		const {testimony,name,post,organization}=testimonial[i]
	document.getElementById('testimonialStudent').innerHTML+=`
        <div class="item carousel-item ${status}">
                <div class="img-box"><img src="../assets/images/c${i+1}.jpg" alt="${name}"></div>
                <p class="testimonial">${testimony}</p>
                <p class="overview"><b>${name}</b>${post} at <a href="#">${organization}</a></p>
                <div class="star-rating">
                  <ul class="list-inline">
                    <li class="list-inline-item"><span class="fa fa-star"></span></li>
                    <li class="list-inline-item"><span class="fa fa-star"></span></li>
                    <li class="list-inline-item"><span class="fa fa-star"></span></li>
                    <li class="list-inline-item"><span class="fa fa-star"></span></li>
                    <li class="list-inline-item"><span class="fa fa-star-o"></span></li>
                  </ul>
                </div>
              </div>`}
          }

 var alltestimony=[{testimony:'Thanks ever so much YoungSsientist! I was once told i was not goot to be a science'+
 'Student as I found Maths too difficult but with the help of Y.S Builder I am now even an expert'+    
 'in maths. I concluded that Maths is Fun and science is easy with good tutor.',
                   name:'Paul Charlie',post:'Mathematics Lecturer',
                   organization:'college of Maths'},{
                   testimony:'Y.S Builder has help me alot in my career. everytime i need to know something or find something difficult they provide me wonderful solution. I never found anyother tutorial like YoungScientist. thanks alot for fulfilling my dream',
                   name:'Michael Holz',post:'Data Analyst',
                   organization:'Lesviou Company Manager'},{
                   testimony:' what could I have become If not because of Y.S Builder? I was always scared by people everytime i said I wanna become a web-developer. as people say coding is difficult but thanks to Y.S Builder team , they make coding become my peice of cake.',
                   name:'Antonio Moreno',post:'Web Developer',
                   organization:'Cheers Technological Company'}
                   ]

  testimonialStudent(alltestimony)

function ApplyForm(submitText){
	document.getElementById('applyForm').innerHTML=`

          <div class="apply-form p-md-5 p-4 mx-auto bg-white mw-100">
            <form action="#" method="post">
              <div class="form-group">
                <label>First name</label>

                <input type="text" class="form-control" id="validationDefault01" placeholder=""
                  required="">
              </div>
              <div class="form-group">
                <label>Last name</label>
                <input type="text" class="form-control" id="validationDefault02" placeholder=""
                  required="">
              </div>

              <div class="form-group mb-4">
                <label class="mb-2">Password</label>
                <input type="password" class="form-control" id="password1" placeholder="" required="">
              </div>

              <button type="submit" class="btn btn-primary submit" ><a href="course.html">${submitText}</a></button>

            </form>
          </div>`
}
ApplyForm('Apply Now')

function whatWeHave(things){
	things.forEach((thing,index)=>{
		const {logo,head,details}=thing
	document.getElementById('whatWeHave').innerHTML+=`
	 <div class="features-1-info col-lg-3 col-md-6">
          <div class="features-1-info-icon">
            <span class="fa ${logo}"></span>
          </div>
          <div class="features-1-info-info">
            <h6><a href="#">${head}</a></h6>
            <p>${details}</p>
          </div>
        </div>`})
}
var thingsWeHave=[{logo:'fa-user',head:'Experienced Faculty',
			details:'Y.S Builder has experienced in faculty of science and technology'},
			{logo:'fa-book',head:'Modern Library',details:'we provide many text-books for you to read and discover a new thing'},
			{logo:'fa-thumbs-o-up',head:'100% Scholarship',details:'We provide you all Scholarship link which you can participate in for your luck.'},
			{logo:'fa-trophy',head:'Our Achievements',details:'we have trainedd many scienstist in different country.'}]
whatWeHave(thingsWeHave)