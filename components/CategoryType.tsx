import React from 'react'
import { Card,CardContent } from "@/components/ui/card"
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { MdOutlineHeadphones } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
function CategoryType() {
  return (
    <div className='flex gap-8'>
      <Card className="h-60 w-60">
           <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
            
            <MdOutlinePhoneAndroid size={50} />
     
        <div className='mt-3'>Phones</div>
        </CardContent>
    
      </Card>
 <Card className="h-60 w-60">
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
           
            <HiOutlineDesktopComputer size={50} />

        <div className='mt-3'>Computers</div>
    </CardContent>
 </Card>
 <Card className="h-60 w-60">
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
            
            <BsSmartwatch size={50} />
        
        <div className='mt-3'>Smart Watches</div>
    </CardContent>
 </Card>
 <Card className="h-60 w-60">
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
            
            <CiCamera size={50} />
    
        <div className='mt-3'>Cameras</div>
    </CardContent>
 </Card>
 <Card className="h-60 w-60">
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
            
            <MdOutlineHeadphones size={50} />
    
        <div className='mt-3' >Head Phones</div>
    </CardContent>
 </Card>
 <Card className="h-60 w-60">
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 h-full">
            
            <IoGameControllerOutline size={50} />
    
        <div className='mt-3'>Gaming</div>
    </CardContent>
 </Card>
    </div>
  )
}

export default CategoryType
