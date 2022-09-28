import React from 'react'
import  ReactDOM  from 'react-dom'



import {BoaTarde, BoaNoite} from './components/Multipos'


ReactDOM.render(<>
    <BoaNoite name='Ana'/>
    <BoaTarde nome='Bia'/>
</>, document.getElementById('root'))