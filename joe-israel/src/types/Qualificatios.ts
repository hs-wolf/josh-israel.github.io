interface IEducation {
  id: String;
  title: String;
  duration: String;
  description: String;
}

interface ICourses {
  id: String;
  title: String;
  description: String;
}

interface IWork {
  id: String;
  title: String;
  duration: String;
  position: String;
  description: String;
}

export { IEducation, ICourses, IWork };
