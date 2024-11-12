import React from "react"
import Back from "../common/back/Back"
import MainTeacherCard from "./MainTeacherCard"
import "./MainTeacher.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const MainTeacher = () => {
  return (
    <>
      <Back title='MainTeacher' />
      <section className='MainTeacher padding'>
        <div className='container grid'>
          <MainTeacherCard/>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default MainTeacher
