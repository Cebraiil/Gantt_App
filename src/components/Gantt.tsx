// made by Ayman jibrael on 01/05/2023
// Gantt chart using Syncfusion component.
// github account : https://github.com/aymanjibrael

import { GanttComponent, TaskFieldsModel, 
        ColumnsDirective, ColumnDirective } 
        from '@syncfusion/ej2-react-gantt';
import { projectData } from '../data';

// Complete gantt component.
const Gantt = () => {
    const taskValues: TaskFieldsModel = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        dependency: "Predeceesor"
      }
  return (
    <GanttComponent dataSource={projectData}
    taskFields={taskValues}>
      <ColumnsDirective>
        {/* Displaying Task ID */}
        <ColumnDirective field="TaskID" headerText="ID"></ColumnDirective>
        {/* Displaying Task Name */}
        <ColumnDirective field="TaskName" headerText="Name"></ColumnDirective>
        {/* Displaying Task Start Date */}
        <ColumnDirective field="StartDate" format="dd-MMM-yy"></ColumnDirective>
        {/* Displaying Task End date */}
        <ColumnDirective field="EndDate" format="dd-MMM-yy"></ColumnDirective>
      </ColumnsDirective>
    </GanttComponent>
  )
}

export default Gantt