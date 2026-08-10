var courses = ["HTML", "CSS", "JS"];

var userCourse = prompt("Enter course name:");

if (courses.includes(userCourse)) {
    alert("Course is available");
} else {
    courses.push(userCourse);
    console.log(courses);
}