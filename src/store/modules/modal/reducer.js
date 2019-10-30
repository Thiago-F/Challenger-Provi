const INITIAL_STATE = [];

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@modal/OPEN': {
      const copyState = [...state];

      copyState.map(cs => {
        cs.open = false;
      });

      const findModal = copyState.filter(cs => cs.key === action.payload.key);

      if (findModal.length > 0) {
        findModal[0].open = true;
      } else {
        copyState.push({ key: action.payload.key, open: true });
      }

      state = [...copyState];

      return state;
    }

    case '@modal/CLOSE': {
      return [];
    }
    default:
      return state;
  }
}
