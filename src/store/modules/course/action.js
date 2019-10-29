export function addCourse(course) {
  return {
    type: '@course/ADD',
    payload: {
      course,
    },
  };
}
