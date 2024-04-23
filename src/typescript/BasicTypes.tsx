

export const BasicTypes = () => {
    const name: string = 'Maria'
    const age: number = 38
    const isActive: boolean = false
    const powers: string[] = ['React', 'Vue', 'Angular']
  return (
    <>
        <h3>Tipos básicos</h3>
        {name} {age} {isActive ? 'true' : 'false'} 
        <br/>
        { powers.join(', ') }
    </>
  )
}
