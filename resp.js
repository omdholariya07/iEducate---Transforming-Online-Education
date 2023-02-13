burger = Document.querySelector('.burger')
navbar = Document.querySelector('.navbar')
navList = Document.querySelector('.navList')
rightNav = Document.querySelector('.rightNav')

burger.addEventlistener('click' , ()=>{
      rightNav.classlist.toggle('v-class-resp');
      navList.classlist.toggle('v-class-resp');
      navbar.classlist.toggle('h-class-resp');
})