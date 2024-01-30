import store from "../store";

export function data() {
    const answer = store.state.answers;

    if(answer.length < 31){
        return false;
    } else {
        return true;
    }
}
