var teacher = require('./teacher');
var student = require('./student');

function add(teacherName,students){
    teacher.add(teacherName);
    students.map(function(arr){
        student.add(arr);
    })
}
exports.add = add;