function EstudanteRow(props) {

 function ClacMedia(nota, nota2 , nota3) {
      return (nota + nota2 + nota3) / 3;
   }

  return (
      <div>
          <ul >
            <li>Nome: {props.student.nome}</li>
            <li>Nota 1: {props.student.nota1}</li>
            <li>Nota 2: {props.student.nota2}</li>
            <li>Nota 3: {props.student.nota3}</li>
             <li>Média : {ClacMedia(props.student.nota1 , props.student.nota2 , props.student.nota3)}</li>
          </ul>
      </div>
  )
}

export default EstudanteRow
