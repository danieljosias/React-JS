<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ReactDOM dentro de um componente</title>

    <!--cdn react development e react dom-->

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!--React com JSX/ os códigos são escritos com HTML-->
    
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <style>
    
        #root{
            border: 4px double chartreuse;
            margin-top:5px;
            width: 250px;
            padding: 20px;
            background-color: black;
            color:chartreuse;
            text-align: center;

        }


    </style>


</head>


    <div id="root"></div>

    <script type="text/babel">
        
       function Tempo(){
           const conteudo = (
               <div>
                    <h3>Relógio Digital</h3>
                    <p>Horário de Brasília: {new Date().toLocaleTimeString()}</p>
                </div>
           )

           ReactDOM.render(conteudo,
            document.getElementById('root')
           
           )
       }
        
       setInterval(Tempo,1000);//(function, milesegundos) // setinterval é uma função temporizadora
    </script> 
