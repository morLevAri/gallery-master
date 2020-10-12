'use strict'

console.log('Gallery Service');

const PAGE_SIZE = 6; 
var gProjs = [];



   
function createProjects(){
    gProjs = [{
        projNum: "1",
        id: "bakery website",
        name: "bakery website",
        title: "a",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/bakery.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       },
       {
        projNum: "2",
        id: "bookShop",
        name: "bookShop",
        title: "b",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/bookShop.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       },
       {
        projNum: "3",
        id: "chess",
        name: "chess",
        title: "c",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/chess.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       },
       {
        projNum: "4",
        id: "mineSweeper",
        name: "mineSweeper",
        title: "d",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/mineSweeper.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       },
       {
        projNum: "5",
        id: "toDoList",
        name: "toDoList",
        title: "e",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/toDoList.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       },
       {
        projNum: "6",
        id: "tuchTheNum",
        name: "tuchTheNum",
        title: "f",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: "img/thumb/tuchTheNum.jpg",
        img: "img/about/1.jpg",
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
       }]  
}

function getProjById(projId) {
    console.log('getProjById', projId);
    var proj = gProjs.find(function (proj) {
      return projId === proj.id;
    });
    return proj;
  }
  
 