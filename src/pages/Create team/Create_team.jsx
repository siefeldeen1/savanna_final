// import React, { useCallback, useReducer, useState } from 'react'
// import './Create_team.css'
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import Column from "./Column";
// import reorder, { reorderQuoteMap } from "../reorder";



// function Create_team(
//     isCombineEnabled,
//     initial,
//     useClone,
//     containerHeight,
//     withScrollableColumns
// ) {
//   const [columns, setColumns] = useState(initial);
//   const [ordered, setOrdered] = useState(Object.keys(initial));

//   const onDragEnd = (result) => {
//     if (result.combine) {
//       if (result.type === "COLUMN") {
//         const shallow = [...ordered];
//         shallow.splice(result.source.index, 1);
//         setOrdered(shallow);
//         return;
//       }

//       const column = columns[result.source.droppableId];
//       const withQuoteRemoved = [...column];

//       withQuoteRemoved.splice(result.source.index, 1);

//       const orderedColumns = {
//         ...columns,
//         [result.source.droppableId]: withQuoteRemoved
//       };
//       setColumns(orderedColumns);
//       return;
//     }

//     // dropped nowhere
//     if (!result.destination) {
//       return;
//     }

//     const source = result.source;
//     const destination = result.destination;

//     // did not move anywhere - can bail early
//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     // reordering column
//     if (result.type === "COLUMN") {
//       const reorderedorder = reorder(ordered, source.index, destination.index);

//       setOrdered(reorderedorder);

//       return;
//     }

//     const data = reorderQuoteMap({
//       quoteMap: columns,
//       source,
//       destination
//     });

//     setColumns(data.quoteMap);
//   };


//   return (
//     <>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable
//           droppableId="board"
//           type="COLUMN"
//           direction="horizontal"
//           ignoreContainerClipping={Boolean(containerHeight)}
//           isCombineEnabled={isCombineEnabled}
//         >
//           {(provided) => (
//             <div style={{minHeight:"100vh",minWidth:"100vw",display:"inline-flex"}} ref={provided.innerRef} {...provided.droppableProps}>
//               {ordered.map((key, index) => (
//                 <Column
//                   key={key}
//                   index={index}
//                   title={key}
//                   quotes={columns[key]}
//                   isScrollable={withScrollableColumns}
//                   isCombineEnabled={isCombineEnabled}
//                   useClone={useClone}
//                 />
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   )
// }
// Create_team.defaultProps = {
//     isCombineEnabled: false
//   };
  
// export default Create_team