const db = require('./database-connection')

module.exports = {
    getAll() {
        return db('students')
    },
    getById(id){
        return db('students').where({id: id}).first()
    },
    getById2(id){
        return db('students').where('id', id)
    },
    getById3(id){
        return db.select().from('students').where('id', id)
    },
    createStudent(newStudent){
        return db('students').insert(newStudent)
    },
    createStudent2(newStudent){
        return db('students').insert(newStudent).returning('*')
    },
    deleteStudent(id){
        return db('students').where('id', id).delete()
    },
    updateStudent(id, updatedStudentInfo){
        return db('students').where('id', id).update(updatedStudentInfo).returning('*')
    }
}