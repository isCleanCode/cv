const myTeam = [
  {
    fName: "Maks",
    specialization: "progger",
  },
  {
    fName: "Den",
    specialization: "projectManager",
  },
  {
    fName: "Oleg",
    specialization: "tester",
  },
  {
    fName: "Katerina",
    specialization: "progger",
  },
  {
    fName: "Olya",
    specialization: "tester",
  },
  {
    fName: "Oleksiy",
    specialization: "projectManager",
  },
  {
    fName: "Misha",
    specialization: "tester",
  },
  {
    fName: "Masha",
    specialization: "progger",
  },
];
const mySalaries = {
  progger: {
    salary: 1000,
    tax: "15%",
  },
  tester: {
    salary: 1000,
    tax: "10%",
  },
  projectManager: {
    salary: 1500,
    tax: "20%",
  },
};

function calculateTeamFinanceReport(salaries, team) {
  let countProjectManagers = 0;
  let countProggers = 0;
  let countTesters = 0;
  team.filter((obj) => {
    if (obj.specialization === "tester") {
      countTesters += 1;
    } else if (obj.specialization === "progger") {
      countProggers += 1;
    } else if (obj.specialization === "projectManager") {
      countProjectManagers += 1;
    }
  });
  const proggerSalary =
    salaries.progger.salary * (parseInt(salaries.progger.tax) / 100) +
    salaries.progger.salary;
  const testerSalary =
    salaries.tester.salary * (parseInt(salaries.tester.tax) / 100) +
    salaries.tester.salary;
  const projectManagerSalary =
    salaries.projectManager.salary *
      (parseInt(salaries.projectManager.tax) / 100) +
    salaries.projectManager.salary;

  let proggersSalaries = proggerSalary * countProggers;
  let testersSalaries = testerSalary * countTesters;
  let projectManagersSalaries = projectManagerSalary * countProjectManagers;

  const totalBudgetTeam =
    proggersSalaries + testersSalaries + projectManagersSalaries;

  let obj = {
    totalBudgetTeam: totalBudgetTeam,
    totalBudgetTesters: testersSalaries,
    totalBudgetProggers: proggersSalaries,
    totalBudgetProjectManagers: projectManagersSalaries,
  };
  return obj;
}

const financeReport = calculateTeamFinanceReport(mySalaries, myTeam);
console.log(JSON.stringify(financeReport));

const g = document.getElementById('Color-')
const viber = document.querySelector('.viber')

viber.onmouseover = () => {
  g.setAttribute('fill', 'rgb(55, 95, 170)')
}
viber.onmouseout = () => {
  g.setAttribute('fill', 'black')
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.col1');

for (let elm of elements) {
  observer.observe(elm);
}





