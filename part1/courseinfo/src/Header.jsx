function Header({ course }) { // apply destructuring
    // const course = prop.course // the traditional way with props
  
    return (
      <>
        <h1>{course}</h1>
      </>
    );
  }
  
  export default Header;
  