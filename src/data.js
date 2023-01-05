// made by Ayman jibrael on 01/05/2023
// project data javascript file
// github account : https://github.com/aymanjibrael


Object.defineProperty(exports, "projects", { value: true });
exports.projectData = [
    {
        TaskID: 1,
        TaskName: 'Project Estimation',
        StartDate: new Date('01/04/2023'),
        EndDate: new Date('01/10/2023'),
        subtasks: [
            { TaskID: 1, TaskName: 'Making Gantt Chart', StartDate: new Date('01/05/2023'), Duration: 1, Progress: 90 },
            { TaskID: 2, TaskName: 'Hamburger Menu', StartDate: new Date('01/07/2023'), Duration: 1, Progress: 60 },
            { TaskID: 3, TaskName: 'Beautiful landing Page', StartDate: new Date('01/10/2023'), Duration: 3, Progress: 70 }
        ]
    },
];