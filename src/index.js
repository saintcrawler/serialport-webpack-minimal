import serialport from 'serialport'

const c = document.createElement('pre')
c.innerText = 'looking for COM ports...'

document.body.appendChild(c)

serialport.list()
  .then(ports => {
    c.innerText = JSON.stringify(ports, undefined, 2)
  })
