import React from 'react'
import  ReactDOM  from 'react-dom'

import Pai from './components/Pai'
import Filho from './components/Filho'


ReactDOM.render(<>
   <Pai nome='Paulo' sobrenome='Silva'>
   <Filho nome="Pedro"  />

    <Filho nome="Paulo" />

    <Filho nome="Carla"  />
   </Pai>
</>, document.getElementById('root'))