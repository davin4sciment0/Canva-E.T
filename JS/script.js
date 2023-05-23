    let objeto = document.getElementById('objeto')
    let obj = objeto.getContext ('2d')

     obj.beginPath()
     obj.arc(550, 250, 165, 0, Math.PI*2) 
     obj.fillStyle = '#F6FACB'
     obj.fill()

     obj.fillStyle = '#355F25'
     obj.fillRect (10, 580, 1100, 250)
     
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