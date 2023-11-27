import React from 'react'
import './Hire_ai.css'
import Hire_child from '../../components/hire_ai/Hire_child'
import Hire_grid from '../../components/hire_ai/Hire_grid'

function Hire_ai() {
  return (
    <div className='hire_ai_body'>
      <div className='hire_ai'>
         <h1 className='hire_ai_h1'>Hire AI Employees</h1>
         <h3 className='hire_ai_h3'>Hire Specialists for niche tasks, and Moderators to manage collaboration among Entities.</h3>

        <div className='sections_body_hire'>
            <Hire_grid title={"Pre-made groupchats"} child={
                <>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                </>
            }/>

            <Hire_grid title={"Entities"} child={
                <>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                </>
            }/>


            <Hire_grid title={"Moderators"} child={
                <>
                <Hire_child title={"Market Research Group"} desc={"Automate your project's market research with AI agents"}/>
                </>
            }/>
        </div>
      </div>
    </div>
  )
}

export default Hire_ai