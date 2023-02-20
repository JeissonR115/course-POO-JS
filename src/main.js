// obj literal
const jeisson = {
    //argumentos
    name: 'jeisson',
    userName: 'JeissonR115',
    age: 18,
    approvedCourses: [],
    //metodo
    passCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
};

// prototipo
function Student(name, userName,  age, approvedCourses){
    //argumentos
    this.name= name
    this.userName= userName
    this.age=age
    this.approvedCourses= approvedCourses
}
    //metodo
    Student.prototype.approvedCourses = function(newCourse) {
        this.approvedCourses.push(newCourse)
    }

// instancia de prototipo ("objet")
const daniel = new Student('Daniel','Bananen',13,['Desarrollo de videojuegos','introduccion a gameMaker'])


// clases (prototipo con sintaxix distinta)
class Student2{
    constructor(name, userName,  age, approvedCourses){
        this.name= name
        this.userName= userName
        this.age=age
        this.approvedCourses= approvedCourses
    }
    approvedCourses(newCourse){
        this.approvedCourses.push(newCourse)
    }
}
const migel = new Student2("migel","m!g31",29,["Analisis de Negosios para la ciencia de datos","Redes informaticas de internet"])