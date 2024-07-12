import Bug from './Bug';

function Bugs({ bugs, onResolveBug }) {
  console.log(Object.values(bugs));
  return (
    <div>
      {Object.values(bugs).map(bug => (
        <Bug {...bug} onResolveBug={onResolveBug} />
      ))}
    </div>
  );
}

export default Bugs;
