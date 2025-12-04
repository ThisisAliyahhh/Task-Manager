const myTask = document.querySelector(`.my__tasks`);
const myTaskBtn = document.querySelector(`.my__tasks__btn`);
const taskAiSummary = document.querySelector(`.task__ai__summary`);
const taskAiSummaryBtn = document.querySelector(`.my__tasks__ai__btn`);
const taskDetails = document.querySelector(`.task-details`); 


myTaskBtn.addEventListener(`click`, (event) => {
    event.preventDefault;
    event.stopPropagation;
    myTaskBtn.classList.add(`active`);
    taskAiSummaryBtn.classList.remove(`active`);
    taskDetails.innerHTML = ` `;
    taskDetails.append(myTask.content.cloneNode(true));
})

taskAiSummaryBtn.addEventListener(`click`, (event) => {
    event.preventDefault;
    event.stopPropagation;
    taskAiSummaryBtn.classList.add(`active`);
    myTaskBtn.classList.remove(`active`);
    taskDetails.innerHTML = ` `;
    taskDetails.append(taskAiSummary.content.cloneNode(true));

    loadTaskAiSummaryContent();
})

const loadTaskAiSummaryContent = () => {
    const latestSummary = document.querySelector(`.latest__summary`);
    const latestSummaryBtn = document.querySelector(`.latest__summary__btn`);
    const tasksAiHistory = document.querySelector(`.my__tasks__ai__history`);
    const tasksAiHistoryBtn = document.querySelector(`.my__tasks__ai__history__btn`);
    const AiSummaryBoxContent = document.querySelector(`.task__ai__summary__box__content`); 
    latestSummaryBtn.addEventListener(`click`, (event) => {
        event.preventDefault;
        event.stopPropagation;
        latestSummaryBtn.classList.add(`active`);
        tasksAiHistoryBtn.classList.remove(`active`);
        AiSummaryBoxContent.innerHTML = ` `;
        AiSummaryBoxContent.append(latestSummary.content.cloneNode(true));
    })
    
    tasksAiHistoryBtn.addEventListener(`click`, (event) => {
        event.preventDefault;
        event.stopPropagation;
        tasksAiHistoryBtn.classList.add(`active`);
        latestSummaryBtn.classList.remove(`active`);
        AiSummaryBoxContent.innerHTML = ` `;
        AiSummaryBoxContent.append(tasksAiHistory.content.cloneNode(true));
    })
}
