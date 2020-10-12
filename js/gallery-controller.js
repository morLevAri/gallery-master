'use strict'

console.log('Gallery Controller');

function onInit() {
  createProjects();
  renderProjs();
  renderModals();
}


function renderProjs() {
  var strHtmls = '';
  strHtmls = gProjs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.projNum}">  
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.url}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
          </div>
        `
  }).join('')
  // console.log('strHTMLs', strHtmls);
  document.querySelector('.my-proj').innerHTML = strHtmls
}

function renderModals() {
  var strHTML = '';
   strHTML = gProjs.map(function (proj) {
    return `
<div class="portfolio-modal modal fade" id="portfolioModal${proj.projNum}" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="close-modal" data-dismiss="modal">
      <div class="lr">
        <div class="rl"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2>${proj.name}</h2>
            <p class="item-intro text-muted modal-p"></p>
            <img class="img-fluid d-block mx-auto modal-img" src="${proj.img}" alt="">
            <p>${proj.desc}</p>
            <ul class="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Threads</li>
              <li>Category: Illustration</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
              <i class="fa fa-times"></i>
              Close Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`
  }).join('')
  console.log('strHTML', strHTML);
  document.querySelector('.portfolio-modals').innerHTML = strHTML;
}


// onclick= "onClickPlus('${proj.id}')"
// #portfolioModal1

function test() {
  console.log('test');
}



// function onClickPlus(projId) {
//   console.log('onClickPlus');
//   var proj = getProjById(projId) 
//   var elModal = document.querySelector('.portfolio-modal')
//   console.log('elModal', elModal);
//   // var elModal2 =  elModal.querySelector('.modal-body');
//   // console.log('elModal2', elModal2);
//   elModal.querySelector('.modal-body h2').innerText = proj.name 
//   elModal.querySelector('.modal-p').innerText = proj.desc
//   elModal.querySelector('.modal-img').src = proj.img
// }