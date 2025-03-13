import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
  const title = "Web development curriculum";

  return (
    <>
      <Header text={title} />
      {courses.map(course => <Content key={course.id} course={course} /> )}
    </>
  );
};

export default Course;
