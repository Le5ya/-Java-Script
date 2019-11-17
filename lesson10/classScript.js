
            
            let div = document.createElement('div');
            div.className = "block";
            document.body.prepend(div);
            let p= document.createElement('p');
            p.id = "best";
            p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
             Itaque unde accusantium ratione. Eveniet accusantium, maiores quasi dolores,\
             nihil molestias non repellendus iste. Voluptatibus modi iusto repellendus similique suscipit\
             officiis molestias!"
            div.appendChild(p);
                   
            p.style.cssText = 'selector: "#best"; height: 200px; height: 200px;width: 500px;  font-size: 20px;background: #ddd656'
                     
                        console.log(p.innerText); 

        function Par(selector, Options ) {
             this.selector = '#selector';
             Options = Options || {};
             this.height = 'height';
             this.width = '500px';
             this.background = 'background';
             this.fontSize = 'fontSize';
                 }                     
                 Par();

            let par = new Par('#good',Option)
            alert(par.selector);
            alert(par.width);
    
    