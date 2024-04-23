
interface Person {
    firstName: string;
    lastName: string;
    age: number
}


export const ObjectLiterals = () => {

    const person: Person = {
        firstName: "Maria",
        lastName: "Imbert",
        age: 38
    }
  return (
    <>
        <h2>Objetos Literales</h2>
   <pre>{ JSON.stringify(person, null, 2)}</pre> 
    </>
  )
}
