import axios from "axios";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import './Create_team.css'
import Norm_button from "../../components/Buttons/Norm_button";
import { useNavigate } from "react-router-dom";



function App() {
  const [agents, setagents] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://entity-abilities.vercel.app/entities",{
        method:"get",
        headers:{
            "Strict-Transport-Security":"max-age=63072000; includeSubDomains; preload"
        }
    })
    .then((res)=>res.json()
    .then((data)=>{
      console.log("data",data);
      setagents(data)
      columns.requested.items = data
    }))
}, [])

    const tasks = agents
    // console.log("agem",agents);
    const taskStatus = {
      requested: {
        name: "Your Workforce",
        items: agents
      },
      toDo: {
        name: "To do",
        items: []
      },
    };
  const [columns, setColumns] = useState(taskStatus);
    
    const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
    
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        console.log("colim",columns);
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        });
      }
    };
    

 
  return (
   <div className="create_teambody">
     <div className="create_team">
      <h1 className="create_team_h1">Create Team</h1>
      <div className="drag_list_body">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {/* {Object.entries(columns).map(([columnId, column], index) => {
            return ( */}
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  alignItems: "center"
                }}
                className="cont_droppable_cont"
                
                key={"requested"}
              >
                <h2 className="drag_header_title">Your Workforce</h2>
                <hr className="drag_header_hr" />
                <div style={{ marginTop:"10px",width:"100%" }}>
                  <Droppable droppableId={"requested"} key={"requested"}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="droppable_inner_div"
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "#ffffff",
                            // padding: 4,
                            width: "100%",
                            minHeight: 500,
                           
                          }}
                        >
                          {columns.requested.items.map((e, index) => {
                            return (
                              <Draggable
                                key={e.agent_id}
                                draggableId={e.agent_id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                    className="draggable_item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                       
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        // height:"fitContent",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {e.name}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>

              <div
              className="cont_droppable_cont"
                key={"toDo"}
              >
                <input placeholder="Select Team Name" className="teamname_inp" type="text" />
                <div style={{ marginTop:"10px",width:"100%" }}>
                  <Droppable droppableId={"toDo"} key={"toDo"}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className="droppable_inner_div"
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "#ffffff",
                            // padding: 4,
                            width: "100%",
                            minHeight: 400,
                            position:"relative",
                          }}
                        >
                          {columns.toDo.items.length == 0 && !snapshot.isDraggingOver &&
                          
                            <div className="placeholder_absol">Drag and drop Entites from &apos;Your Workforce &apos;</div>}

                          {columns.toDo.items.map((item, index) => {
                              console.log("items",item);
                            return (

                               <Draggable
                                key={item.agent_id}
                                draggableId={item.agent_id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                    className="draggable_item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                       
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        // height:"fitContent",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.name}
                                    </div>
                                  );
                                }}
                              </Draggable>
                             
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                  <Norm_button text={"Initialize"} onClick={()=>{navigate('/ProjectName')}}/>
                </div>
              </div>
          {/* //   );
          // })} */}
          {/* {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            padding: 4,
                            width: 250,
                            minHeight: 500,
                            display:"grid",gridTemplateColumns:"48% 48%", justifyContent:"space-around",gridAutoRows:"max-content"
                          }}
                        >
                          {column.items.map((item, index) => {
                            // console.log("colo",item);
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                    className="draggable_item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                       
                                        userSelect: "none",
                                        padding: 16,
                                        margin: "0 0 8px 0",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        // height:"fitContent",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })} */}
        </DragDropContext>
      </div>
    </div>
   </div>
  );
}

export default App;
