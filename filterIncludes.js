let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function findCommonCourses() {
    let commonCourses = student1Courses.filter(course => student2Courses.includes(course));
    document.getElementById("exercise4-result").innerText = "Common courses: " + commonCourses.join(", ");
}