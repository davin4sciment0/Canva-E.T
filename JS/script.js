    let objeto = document.getElementById('objeto')
    let obj = objeto.getContext ('2d')

    //Lua
     obj.beginPath()
     obj.arc(550, 250, 165, 0, Math.PI*2) 
     obj.fillStyle = '#F6FACB'
     obj.fill()

     //Cratéra da Lua
     obj.beginPath()
     obj.arc(450, 200, 35, 0, Math.PI*2) 
     obj.fillStyle = '#C5C7A7'
     obj.fill()

     obj.beginPath()
     obj.arc(620, 310, 50, 0, Math.PI*2) 
     obj.fillStyle = '#C5C7A7'
     obj.fill()
    
     obj.beginPath()
     obj.arc(615, 165 , 30, 0, Math.PI*2) 
     obj.fillStyle = '#C5C7A7'
     obj.fill()

         //Muitas estrelas
         obj.beginPath() 
         obj.arc(550, 520, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(350, 320, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(250, 550, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(50, 520, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(350, 120, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(250, 220, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(155, 100, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(155, 100, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(155, 250, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(175, 350, 4, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(275, 450, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(875, 450, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(820, 550, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(910, 250, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(825, 200, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(910, 350, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(845, 350, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(925, 150, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(775, 150, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    
         obj.beginPath()
         obj.arc(875, 100, 5, 0, Math.PI*2) 
         obj.fillStyle = '#F6FACB'
         obj.fill()
    

        //Árvores
        obj.beginPath()
        obj.moveTo (50, 650)
        obj.lineTo (50, 300)
        obj.strokeStyle= '#6D3C3C'
        obj.lineWidth = 25
        obj.stroke()

        obj.beginPath()
        obj.moveTo (300, 650)
        obj.lineTo (300, 450)
        obj.strokeStyle= '#6D3C3C'
        obj.lineWidth = 25
        obj.stroke()

        obj.beginPath()
        obj.moveTo (800, 650)
        obj.lineTo (800, 450)
        obj.strokeStyle= '#6D3C3C'
        obj.lineWidth = 25
        obj.stroke()

        obj.beginPath()
        obj.moveTo (900, 650)
        obj.lineTo (900, 500)
        obj.strokeStyle= '#6D3C3C'
        obj.lineWidth = 25
        obj.stroke()

        obj.beginPath()
        obj.moveTo (1000, 650)
        obj.lineTo (1000 , 350)
        obj.strokeStyle= '#6D3C3C'
        obj.lineWidth = 25
        obj.stroke()


         //Folhas
         obj.beginPath()
         obj.arc(50,450,120,0, Math.PI,true)
         obj.fillStyle = '#386739'
         obj.fill()

         obj.beginPath()
         obj.arc(50,350,100,0, Math.PI,true)
         obj.fillStyle = '#386739'
         obj.fill()

         obj.beginPath()
         obj.arc(50,270, 80,0, Math.PI,true)
         obj.fillStyle = '#386739'
         obj.fill()

        obj.beginPath()
        obj.arc(300,450,100,0, Math.PI,true)
        obj.fillStyle = '#386739'
        obj.fill()

        //Grama
        obj.fillStyle = '#355F25'
        obj.fillRect (10, 580, 1100, 250)
        
        //Bicicleta
        obj.beginPath()
        obj.arc(485, 370, 58, 0, Math.PI*2) 
        obj.lineWidth = 8
        obj.strokeStyle = '#929594'
        obj.stroke()

        obj.beginPath()
        obj.arc(680, 320, 58, 0, Math.PI*2) 
        obj.strokeStyle = '#929594'
        obj.stroke()

        obj.beginPath()
        obj.moveTo (480, 370)
        obj.lineTo (500, 260)
        obj.strokestyle = '#929594'
        obj.lineWidth = 5
        obj.stroke()

        obj.beginPath()
        obj.moveTo (685, 320)
        obj.lineTo (660, 210)
        obj.strokestyle = '#929594'
        obj.lineWidth = 5
        obj.stroke()

        
        obj.beginPath()
        obj.moveTo (496, 290)
        obj.lineTo (665, 230)
        obj.strokestyle = '#929594'
        obj.lineWidth = 5
        obj.stroke()

            
        obj.beginPath()
        obj.moveTo (625, 209)
        obj.lineTo (663, 210)
        obj.strokestyle = '#929594'
        obj.lineWidth = 5
        obj.stroke()
