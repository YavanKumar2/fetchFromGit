fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
.then(response=>response.json())
.then(data=>{
    let html=`<table><tr>`
    for(let x in data.Employees[0])
    {
        html+=`<th>${x}</th>`
    }
    html+=`</tr>`
    for(let x=0;x<3;x++)
    {
        html+=`<tr>`
        for(let i in data.Employees[x])
        {
            html+=`<td>${data.Employees[x][i]}</td>`
        }
        html+='</tr>'
    }
    
    const tableDiv=document.getElementById('table')
    tableDiv.innerHTML=html
    const salaryDiv=document.getElementById('salary')
    let names=[]
    for(let x=0;x<3;x++)
    {
        if(data.Employees[x].Salary>500000)
        {
            names.push(data.Employees[x].Name)
            
        }
    }
    // console.log(names)
    let higherSalaryEmployees=names.join(',')
    // console.log(higherSalaryEmployees)
    
    salaryDiv.innerHTML = `<h3>${higherSalaryEmployees} receive salary greater than 5,00,000</h3>`
    let freshers=[]
    for(let x=0;x<3;x++)
    {
        if(data.Employees[x].DateOfJoining.substring(3,5)=='12')
        {
            freshers.push(data.Employees[x].Name)

        }

    }
    console.log(freshers)
    let fresherEmployees=freshers.join(',')
    console.log(fresherEmployees)
    const freshersDiv=document.getElementById('freshers')
    freshersDiv.innerHTML=`<h3>${fresherEmployees} joined in december`

})
