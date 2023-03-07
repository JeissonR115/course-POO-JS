function videoPlay(id){
    const url = "https//:"+ id
    console.log("se esta reproduciendo "+ url)
}
function videoStop(id){
    const url = "https//:"+ id
    console.log("se estapausando "+ url)
}

class Student{
    constructor({  
        name,
        age,
        email,
        twitter = undefined,
        instagram= undefined,
        facebook = undefined,
        approvedCourses = [],
        learnigPaths =[],
    })
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.socialMedia = {
            twitter:twitter,
            instagram: instagram,
            facebook: facebook,
        }
        this.approvedCourses = approvedCourses = [];
        this.learnigPaths = learnigPaths =[];
    }
}
class FreeStudent extends Student{
    constructor(props){
        super(props)
    }

    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn(`lo siento ${this.name} tienes que conseguir un plan basico o expert`)
        }
    }

}
class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if(newCourse.lag !== "english" ){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn(`lo siento ${this.name} tienes que conseguir un plan expert`)
        }
    }
}
class EspertStudent extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){this.approvedCourses.push(newCourse)}
}


class LearnigPath{
    constructor({
        name,
        courses,
        category,
    }){
        this.name = name ;
        this.courses = courses ;
        this.category = category ;
    }
}
class Course{
    constructor({        
        name,
        teacher,
        classes = [],
        isFree = false,
        lag="spanish"
    }){
            this.name = name;
            this.teacher = teacher;
            this.classes = classes;
            this.isFree = isFree;
            this.lag = lag;
    }

}
class Class{
    constructor({
        name,
        videoID,
    }){
        this.name = name
        this.videoID = videoID
    }
    play(){
        videoPlay(this.videoID);
    }
    stop(){
        videoStop(this.videoID)
    }
}

const courseFrontendDev = new Course({
    name:'Frontend Developer',
    teacher:'Estefany Aguilar',
    classes: []
})
const courseJSPoo = new Course({
    name:'Básico de Programación Orientada a Objetos con JavaScript',
    teacher:'Juan David Castro Gallego',
    classes: []
})
const courseDataEngineeringFundamentals = new Course({
    name:'Fundamentos de Ingeniería de Datos',
    teacher:'Ricardo Alanís',
    classes: []
})
const courseTerminal = new Course({
    name:'Introducción a la Terminal y Línea de Comandos',
    teacher:'Enrique Devars',
    classes: [],
    isFree:true,
    lag:"english",

})
const courseDatabase= new Course({
    name:'Fundamentos de Bases de Datos',
    teacher:'Israel Vázquez Morales',
    classes: [],

})
const courseDefinitiveHTMLCSS = new Course({
    name:'Definitivo de HTML y CSS',
    teacher:'Diego De Granda',
    classes: [],
    isFree:true,
})

const schoolWeb = new LearnigPath({
    name:'Desarrollo web',
    courses:[
        courseJSPoo,
        courseDefinitiveHTMLCSS,
        courseFrontendDev,
        courseTerminal
    ],
    category:'Development and Engineering',
})
const schoolData = new LearnigPath({
    name:'Data Science e Inteligencia Artificial',
    courses:[
        courseTerminal,
        courseDatabase,
        courseDataEngineeringFundamentals
    ],
    category:'Development and Engineering',
})
const schoolVideoGames = new LearnigPath({
    name:'Videoluegos',
    courses:[
        courseTerminal
    ],
    category:'Development and Engineering',
})


const Jeisson = new FreeStudent({
    name:'jeisson',
    age:15,
    email:'jeissonfr@gmail.com',
    learnigPaths:[
        schoolData,
        schoolWeb,
    ]
})
const migel = new BasicStudent({
    name:'migel',
    age:5,
    email:'jeissonfr@gmail.com',
    learnigPaths:[
        schoolVideoGames,
    ]
})