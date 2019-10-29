const INITIAL_STATE = [
  {
    loan: '',
    course: '',
    actuallyPartial: '',
  },
];

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@course/ADD': {
      let copyState = [...state];

      copyState = action.payload.course;

      return copyState;
    }

    default:
      return state;
  }
}
