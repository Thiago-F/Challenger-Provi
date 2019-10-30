const INITIAL_STATE = [
  {
    loan: '',
    course: '',
    actuallyPartial: '',
    totalCourse: [],
  },
];

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@course/ADD': {
      // copiando o state atual
      let copyState = [...state];

      // substituindo para um novo curso
      copyState = [action.payload.course];

      state = [...copyState];

      return state;
    }

    default:
      return state;
  }
}
