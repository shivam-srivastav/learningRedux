
import { ADD_ARTICLE , ADD_CLICK } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function addClick(payload){
  return { type: ADD_CLICK, payload}
}

