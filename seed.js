const {db} = require('./server/db')

const Student = require('./server/db/models/students');
const Campus = require("./server/db/models/campuses");

const students = [
  {
    firstName: "Lebron",
    lastName: "James",
    email: "lebronjames@lakers.edu",
    imageUrl:
      "https://i.insider.com/61f16c8ae996470011907acd?width=900&format=jpeg",
    gpa: "3.9",
  },
  {
    firstName: "Saitama",
    lastName: "CapedBaldy",
    email: "capedbaldy@hero.assc",
    imageUrl: "https://miro.medium.com/max/1400/1*2bjwCLaA8TfH40OXcyLNvA.png",
    gpa: "2.1",
  },
  {
    firstName: "Wendeline",
    lastName: "Churchard",
    email: "wchurchard0@hustleuniversity.edu",
    imageUrl: "http://dummyimage.com/187x100.png/ff4444/ffffff",
    gpa: "2.9",
  },
  {
    firstName: "Ronald",
    lastName: "McDonald",
    email: "mickeyDeez@mcd.mcd",
    imageUrl:
      "https://s3-prod.adage.com/s3fs-public/ronald-mcdonald-052011.jpg",
    gpa: "4.0",
  },
  {
    firstName: "Chad",
    lastName: "Mega",
    email: "megachad@hustleuniversity.edu",
    imageUrl:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2021/10/NINTCHDBPICT000687721862.jpg",
    gpa: "1.0",
  },
];

const campuses = [
    {

}
]