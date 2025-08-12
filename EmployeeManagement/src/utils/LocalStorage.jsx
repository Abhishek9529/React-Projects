localStorage.clear()
const employees = [
    {
        "id": 1,
        "firstname": "Aarav",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare sales report",
                "description": "Compile and analyze the quarterly sales report.",
                "date": "2025-08-14",
                "category": "Sales"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update client database",
                "description": "Refresh client records in the CRM system.",
                "date": "2025-08-10",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Follow up with suppliers",
                "description": "Contact suppliers for pending orders.",
                "date": "2025-08-11",
                "category": "Procurement"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 2,
        "firstname": "Ishaan",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design marketing poster",
                "description": "Create a promotional poster for the new campaign.",
                "date": "2025-08-16",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Write blog post",
                "description": "Publish a blog post about industry trends.",
                "date": "2025-08-09",
                "category": "Content"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Organize workshop",
                "description": "Plan and arrange logistics for the training workshop.",
                "date": "2025-08-12",
                "category": "Training"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Customer feedback survey",
                "description": "Collect and review feedback from recent customers.",
                "date": "2025-08-15",
                "category": "Customer Service"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Vihaan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Test new software release",
                "description": "Perform QA testing for the latest software update.",
                "date": "2025-08-14",
                "category": "QA"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix login bug",
                "description": "Resolve issue causing login errors for some users.",
                "date": "2025-08-08",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Integrate payment gateway",
                "description": "Set up and test new payment gateway integration.",
                "date": "2025-08-12",
                "category": "Development"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 4,
        "firstname": "Advait",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare training materials",
                "description": "Create slides and handouts for new employee training.",
                "date": "2025-08-14",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Conduct interviews",
                "description": "Interview shortlisted candidates for developer position.",
                "date": "2025-08-09",
                "category": "HR"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Organize company event",
                "description": "Plan annual company celebration.",
                "date": "2025-08-10",
                "category": "Events"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Onboard new employees",
                "description": "Assist new hires in completing onboarding process.",
                "date": "2025-08-15",
                "category": "HR"
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstname": "Kabir",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Prepare budget report",
                "description": "Draft next quarter's budget plan.",
                "date": "2025-08-13",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update expense sheet",
                "description": "Record last month's expenses in finance tracker.",
                "date": "2025-08-09",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Tax filing",
                "description": "Submit quarterly tax documents.",
                "date": "2025-08-10",
                "category": "Finance"
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];



export const setLocalStorage = () =>{
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees =  JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return {employees, admin}
}




