const App = ({ subjects }) =>
  <ul>
    You like {subjects.map(subject => <li>{subject}</li>)}
  </ul>

var mountNode = document.getElementById('app');
ReactDOM.render(<App subjects={[ 'Javscript', 'Go' ]} />, mountNode);
