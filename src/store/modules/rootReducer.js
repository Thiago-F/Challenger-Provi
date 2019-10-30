import { combineReducers } from 'redux';

import course from './course/reducer';
import modal from './modal/reducer';

export default combineReducers({ course, modal });
