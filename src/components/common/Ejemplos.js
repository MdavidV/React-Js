export const Ejemplo = ( { profesor = 'Carlos Canon', tutor = 'Pedro Picapiedra'} ) => {
    
    // console.log(props);

    // const {profesor, tutor} = props; 
    
    return(
        <div>
            <h2>Hola! {profesor}</h2>
            <p>Tutor Asignado: {tutor}</p>
        </div>
    )
}