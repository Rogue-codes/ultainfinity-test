import React, { useEffect, useState } from 'react'
import { dashBordData } from '../../utils/data';
import "./dashboard.scss"
import Header from '../../components/header/Header';
import Body from '../../components/body/Body';
import { ResponseData } from '../../interfaces/interface';



  interface dashboardProps{
    setActivetab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string;
  }

export default function Dashboard({setActivetab,activeTab}:dashboardProps) {
    const [data,setData] = useState<ResponseData | null>()

    useEffect(()=>{
        setData(dashBordData)
    },[])

    console.log(data)
  return (
    <div className='dashboard__container'>
      <Header setActiveTab={setActivetab} activeTab={activeTab}/>
      <Body activeTab={activeTab} res={data}/>
      
    </div>
  )
}
