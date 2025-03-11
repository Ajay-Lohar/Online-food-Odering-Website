import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <div>
        <Card className='flex justify-between items-center p-5 '>

            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16 ' src="https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714511_960_720.jpg" alt="Pizza" />
                <div>
                    <p>Pizza </p>
                    <p>Price : ₹399  </p>
                </div>
            </div>
            <div>
                <Button  className="cursor-not-allowed">
                    Completed
                </Button>
            </div>
            

        </Card>
    </div>
  )
}

export default OrderCard