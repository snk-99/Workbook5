let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    },
];


// When does the PROG200 course start?
let courseId = "PROG200"

function courseStart(course) {
    return course.CourseId === courseId;
}
const matchingCourse = courses.find(courseStart);
console.log(matchingCourse.StartDate);



// What is the title of the PROJ500 course?
function courseTitle(course) {
    return course.CourseId === "PROJ500";
}
const title = courses.find(courseTitle);
console.log(title.Title);

console.log("--------------------------");

// What are the titles of the courses that cost $50 or less?
function lessThan50(course) {
    return course.Fee <= 50;
}
const allUnder50 = courses.filter(lessThan50);
console.log(allUnder50);


console.log("--------------------------");

// What classes meet in "Classroom 1"?
function classesLocation(course) {
    return course.Location === "Classroom 1";
}
const location = courses.filter(classesLocation);
console.log(location);