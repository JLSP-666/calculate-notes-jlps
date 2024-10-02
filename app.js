// const btnGreat = document.querySelector('#btnGreat')

// btnGreat.addEventListener('click', great)

// function great () {
  //   alert(username.value)
  // }
  
  const username = document.getElementById('nombre')
  const data1 = document.getElementById('nota1')
  const data2 = document.getElementById('nota2')
  const data3 = document.getElementById('nota3')
  const btnCalculate = document.getElementById('btn-calculate')
  const response = document.getElementById('resultado')
  const predecir=document.getElementById('predecir')
  
  btnCalculate.addEventListener('click', calculateNote )

  function calculateNote(event) {

    event.preventDefault()

    

    let note1 = Number(data1.value)        
    let note2 = Number(data2.value)        
    let note3 = Number(data3.value)
     

    
    
    let result = ((note1 * 0.3) + (note2 * 0.3) + (note3 * 0.4)).toFixed(2)
    if (result < 3.5) {
       response.style.color = 'red'
    response.textContent = `SR/SRA/ ${username.value} su nota definitiva es: ${result} perdio la materia hippie :D`
    } if (result >=  3.5 && result <= 4.5) {
      response.style.color = 'orange'
      response.textContent = `SR/SRA/ ${username.value} su nota definitiva es: ${result} gano la maria la materia estudiante :|`
      
    } if (result >  4.5) {
      response.style.color = 'green'
       response.textContent = `SR/SRA/ ${username.value} su nota definitiva es: ${result} gano la maria la materia señor usted es superior a los demas :¬°`
    };
     
  }

  function predecir(event){
    event.preventDefault()

    let note1 = Number()        
    let note2 = Number()        
    let note3 = Number()
  }

  




