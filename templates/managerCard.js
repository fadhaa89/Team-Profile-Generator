function managerCard (member) {

    return (
 
`<div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header"><span id="name">${member.name}</span><br /><br />Manager</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: <span id="empID">${member.id}</span></li>
        <li class="list-group-item">Email Address:<span id="email">${member.email}</span> </li>
        <li class="list-group-item">Office Phone: <span id="phone">${member.phone}</span></li>
    </ul>
 </div>`
    )
}

module.exports = managerCard;