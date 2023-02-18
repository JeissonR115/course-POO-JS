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

// prototipo("class")
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


