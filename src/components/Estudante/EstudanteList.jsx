import EstudanteRow from './EstudanteRow.jsx';
function EstudanteList(props) {
  return (
    <div>
      <h3>ESTUDANTES</h3>
      {props.students.map((student, index) => {
        return (
          <ul key={index}>
            <EstudanteRow student={student} />
          </ul>
        );
      })}
    </div>
  );
}


export default EstudanteList
