// Utils
import { isDefined } from './is';

export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function isFirstRender(items) {
  return items && items.length === 0 || !isDefined(items);
}
