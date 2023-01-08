 class Calculator {
    constructor(previousOperationText,currentOperationText){
    this.previousOperationText = previousOperationText
    this.currentOperationText = currentOperationText
    this.currentOperation =''
    } 
  addDigit(digit){
    if(digit ==='.'&&currentOperationText.innerText.includes('.')){
        return;
    }
    this.currentOperation = digit
    this.updateScreen()
  }
  processOperations(operation){
    //check if current is empty
      if(this.currentOperationText.innerText ==='' && operation !== 'CLEAR'){
        //Muda a operação
        if(this.previousOperationText.innerText !==''){
          this.changeOperation(operation)

        }
        return
      }
    this.currentOperation = operation
    let operationValue = ''
    const previous = +this.previousOperationText.innerText.split(' ')[0]
    const current = +this.currentOperationText.innerText
    switch(operation){
      case '+':
        operationValue = previous + current
        this.updateScreen(operationValue,operation,previous,current)
        break;
      case '-':
        operationValue = previous - current
        this.updateScreen(operationValue,operation,previous,current)
        break;
      case '*':
        operationValue = previous * current
        this.updateScreen(operationValue,operation,previous,current)
        break;
      case '/':
        operationValue = previous / current
        this.updateScreen(operationValue,operation,previous,current)
        break;
      case 'DELETE':
        this.DeleteOperation()
        break;
      case 'CLEAR':
        this.ClearOperation()
        break;
      case '=':
        this.ProcessOperations()
        break;
      default:
        return;

    }
    



  }
  updateScreen(
    operationValue =null,
     operation = null,
     previous = null,
     current=null)
    {
    if(operationValue===null){ 
      this.currentOperationText.innerText += this.currentOperation
    }
      else{
           if(previous===0) {
            operationValue = current
      }
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";}
    }
     changeOperation(operation){
      const mathOperations = ['+', '-', '*', '/']
      if(!mathOperations.includes(operation)){
        return
      }
      // Vai remover a ultima operação com o slice(0, -1) e colocar a nova concatenado o operation
      this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1)+ operation
     }
    DeleteOperation(){
      this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }
    ClearOperation(){
      this.currentOperationText.innerText =''
      this.previousOperationText.innerText =''
    }
    //Processa as operções ao apetar o botão de igual
    ProcessOperations(){
      const operation = previousOperationText.innerText.split(' ')[1]

      this.processOperations(operation)
    }
    
  }


const previousOperationText = document.querySelector('#previous')
const currentOperationText = document.querySelector('#current')
const buttons  = document.querySelectorAll('button')
const calculator = new Calculator(previousOperationText,currentOperationText)
buttons.forEach((button) => {
    button.addEventListener('click',(e) =>{
        const value = e.target.innerText
        console.log(value)
        if(+value >=0|| value ==='.'){
            calculator.addDigit(value)
        }
        else {
            calculator.processOperations(value)
        }
    })
})

//A logica do programa
//1°:Pegar os elementos DOM (X)
//2°:Fazer com que os botões impressem os seus valores na screen, mais precissamente no currentOperationText(x)
//3°:passe os valores do currentOperationText e previousOperationText para a class(x)
//4°: 






