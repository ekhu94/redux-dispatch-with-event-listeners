let state;
let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})

const reducer = (state={count: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

const dispatch = action => {
    state = reducer(state, action);
    render();
}

const render = () => {
    const container = document.querySelector('#container');
    container.innerText = state.count;
}

dispatch({ type: '@@INIT' });