import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
//   console.log("from Course Component", course);
//   console.log("from Course Component", course.parts);

  return (
    <>
      <Header text={course.name} />
      <Content courses={course.parts} />
    </>
  );
};

export default Course;
