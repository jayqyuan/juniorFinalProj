
const { green, red } = require("chalk");

// const {Students} = require('./server/db/models/students');
// const {Campuses} = require("./server/db/models/campuses");
const { db} = require("./server/db");
const { Campuses } = require("./server/db/models/campuses");
const { Students } = require("./server/db/models/students");


const students = [
  {
    firstName: "Lebron",
    lastName: "James",
    email: "lebronjames@lakers.edu",
    imageUrl:
      "https://i.insider.com/61f16c8ae996470011907acd?width=900&format=jpeg",
    gpa: "3.9",
    campusId: 3,
  },
  {
    firstName: "Saitama",
    lastName: "CapedBaldy",
    email: "capedbaldy@hero.assc",
    imageUrl: "https://miro.medium.com/max/1400/1*2bjwCLaA8TfH40OXcyLNvA.png",
    gpa: "2.1",
    campusId: 2,
  },
  {
    firstName: "Wendeline",
    lastName: "Churchard",
    email: "wchurchard0@trustme.edu",
    imageUrl: "http://dummyimage.com/187x100.png/ff4444/ffffff",
    gpa: "2.9",
    campusId: 1,
  },
  {
    firstName: "Ronald",
    lastName: "McDonald",
    email: "mickeyDeez@hero.assc",
    imageUrl:
      "https://s3-prod.adage.com/s3fs-public/ronald-mcdonald-052011.jpg",
    gpa: "4.0",
    campusId: 2,
  },
  {
    firstName: "Chad",
    lastName: "Mega",
    email: "megachad@trustme.edu",
    imageUrl:
      "https://www.the-sun.com/wp-content/uploads/sites/6/2021/10/NINTCHDBPICT000687721862.jpg",
    gpa: "1.0",
    campusId: 1,
  },
  {
    firstName: "Eren",
    lastName: "Jaeger",
    email: "erenjaegar@aot.com",
    imageUrl:
      "https://sm.ign.com/t/ign_in/screenshot/default/eren-final-titan_68cm.1280.jpg",
    gpa: "3.7",
    campusId: 4,
  },
  {
    firstName: "Mikasa",
    lastName: "Ackerman",
    email: "mikasa@aot.com",
    imageUrl: "https://i.ytimg.com/vi/HwY_2j0mdpk/maxresdefault.jpg",
    gpa: "3.9",
    campusId: 4,
  },
];

const campuses = [
  {
    name: "trustme bro University",
    imageUrl:
      "https://www.coe.int/documents/16695/114465556/20220414+news+cpt++roumanie+Romania-2021.jpg/f8735b54-ad10-25b5-7580-74dcbc0ad7fe",
    address:
      "Str. Maria Ghiculeasa No. 47, RO-72228 Bucharest sector 2, Romania",
    description: "we are a good university, plz trust me",
  },
  {
    name: "Hero Association",
    imageUrl:
      "https://static.wikia.nocookie.net/onepunchman/images/3/3f/New_Hero_Association_Headquarters_Anime.png/revision/latest?cb=20200419194943",
    address: "A-city",
    description:
      "Metal KNight protects this university in city A. we have caped baldy as resident so you know we are good",
  },
  {
    name: "LA Lakers",
    imageUrl:
      "https://phantom-marca.unidadeditorial.es/0ce0ca1b8b736f8869655d0431962d50/resize/1320/f/jpg/assets/multimedia/imagenes/2023/01/05/16728738592018.jpg",
    address: "2275 East Mariposa Avenue El Segundo, CA 90245 USA",
    description: "we are a good university, plz trust me",
  },
  {
    name: "AOT",
    imageUrl:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/01/Yelena-scary-face-in-Attack-on-Titan.jpg",
    address: "Eldia, Paradis Island",
    description: "shinzou wo sasageyo",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
          campuses.map((campus) => {
            return Campuses.create(campus);
          })
        );
    await Promise.all(
      students.map((student) => {
        return Students.create(student);
      })
    );
    

    console.log(green("Seeding success!"));
    db.close();
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  }
};

seed()