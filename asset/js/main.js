




const { createApp } = Vue

createApp({

  // VARIABILI VUE
  data() {
    return {
      
      todos: [
        {
          text: 'Fare i compiti',
          done: false
        },
        {
          text: 'Fare la spesa',
          done: true
        },
        {
          text: 'Fare il bucato',
          done: false
        }
      ],

  

    }
  },

  //chiamata function al caricamento della pagina
  created(){
    
  },

  // FUNZIONI VUE
  methods: {



  }

}).mount('#app')




/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.






 */