import {homepage, findStudents, findStudentsPOST, addStudentPOST} from './controller.js';

const router = (app) => {
    app.get('/', homepage);
    app.get('/find-students', findStudents);
    app.post('/find-students-post', findStudentsPOST);
    app.post('/add-students', addStudentPOST)
}

export default router;