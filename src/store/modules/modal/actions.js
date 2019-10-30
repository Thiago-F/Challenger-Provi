export function openModal(key) {
  return {
    type: '@modal/OPEN',
    payload: {
      key,
    },
  };
}
export function closeModal(key) {
  return {
    type: '@modal/CLOSE',
    payload: {
      key,
    },
  };
}
