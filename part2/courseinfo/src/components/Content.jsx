import Part from "./Part";

const Content = ({ courses }) => {
//   console.log("from Content Component", courses);
  return (
    <>
      {courses.map((course) => (
        <Part key={course.id} name={course.name} exercises={course.exercises} />
      ))}
    </>
  );
};

export default Content;
