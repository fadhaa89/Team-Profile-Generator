function internCard (member) {

    return (
 
`<div class="card mx-auto mb-3" style="width: 18rem">
    <h5 class="card-header"><span id="name">${member.name}</span><br /><br />Intern</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: <span id="empID">${member.id}</span></li>
        <<li class="list-group-item">Email Address:<span id="email"><a href="mailto:${member.email}">${member.email}</a></span> </li>
        <li class="list-group-item">School: <span id="School">${member.school}</span></li>
    </ul>
 </div>`
    )
}

module.exports = internCard;