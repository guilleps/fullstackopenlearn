import Part from "./Part";
import Total from "./Total";

const Content = ({ course }) => {

  return (
    <>
      <h2>{course.name}</h2>
      <ul>
      <Part parts={course.parts} />
      </ul>
      <Total total={course.parts} />
    </>
  );
};

export default Content;
