//first point need print in one sentence there age and tasks
let info=[
    {id:1,Name:'Mohammed',age:18,level:'intermediate',tasksCompleted:8},
    {id:2,Name:'Omar',age:22,level:'beginner',tasksCompleted:2},
    {id:3,Name:'Sarah',age:20,level:'beginner',tasksCompleted:4},
    {id:4,Name:'Saleh',age:15,level:'intermediate',tasksCompleted:6},
    {id:5,Name:'Saud',age:30,level:'advanced',tasksCompleted:10},
    {id:6,Name:'Amani',age:25,level:'advanced',tasksCompleted:10},
    {id:7,Name:'Lojain',age:23,level:'advanced',tasksCompleted:10}
];

//maybe like 1 :
//let justeAgeAndTask =info.filter(info=>info.age!==8,info=>info.tasksCompleted!==8);
//console.log(justeAgeAndTask);
// //maybe like 2 :;
// const justeAgeAndTask = info.every (tasksCompleted==10?
//     (
//         info.map
//         (item=>
//         ( { age:item.age ,tasksCompleted: item.tasksCompleted})))
//     :console.log("no one is completed tasks"));
//second point reput the highest task to the lower 

// info.sort(sortingTasks);
// console.log(info);
// function sortingTasks(a,b){
// return b.tasksCompleted-a.tasksCompleted;
// }

// //third point is for filter who are 25 or older 
// let ppl=info.filter(info=>info.age>=25);
// console.log(ppl);
//fourth point is add new key but first check if taskes less or than 5
// if (info.tasksCompleted>5) {
//     info.forEach((item ,arr)=>{console.log(info.filter(info=>info.age<5))})
// }else if (info.tasksCompleted<5) {
//     info.forEach((item ,arr)=>{console.log(info.filter(info=>info.age<5))})
// }
