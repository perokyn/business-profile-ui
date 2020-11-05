import React from 'react'
import Button from '../components/Button'

const ProfilePage=(props)=>{

const buttonfocus=React.createRef()

const  handleClick=(e)=>{

    buttonfocus.current.focus()
    console.log('click', buttonfocus.current.value)
}

return(



<>

<h2>ProfilePage</h2>
<Button    ref={buttonfocus} Style='bg-green200'  handleClick={ e=>handleClick(e)} value='click'>Click</Button>




</>

)

}

export default ProfilePage