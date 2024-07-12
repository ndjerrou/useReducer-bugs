import { useReducer } from 'react';
import { reducer } from './reducer';
import BugList from './components/BugList';
import { bugAdded, bugRemoved, bugResolved } from './actions';
import BugAdd from './components/BugAdd';

function App() {
  const [state, dispatch] = useReducer(reducer, {
    bugs: {},
  });

  const handleResolveBug = id => dispatch(bugResolved(id));

  const handleAddBug = title => dispatch(bugAdded(title));

  const handleDeleteBug = id => dispatch(bugRemoved(id));

  return (
    <div>
      <BugAdd onAddBug={handleAddBug} />
      <BugList
        bugs={state.bugs}
        onResolveBug={handleResolveBug}
        onDeleteBug={handleDeleteBug}
      />
    </div>
  );
}

export default App;
