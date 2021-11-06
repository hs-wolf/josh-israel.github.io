interface IEducation {
  id: string;
  title: string;
  duration: string;
  description: string;
}

interface ICourses {
  id: string;
  title: string;
  description: string;
}

interface IWork {
  id: string;
  title: string;
  duration: string;
  position: string;
  description: string;
}

export { IEducation, ICourses, IWork };
