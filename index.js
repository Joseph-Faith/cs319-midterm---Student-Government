fetch("data2.json")
.then(response => response.json())
.then(myuser => loaduser(myuser));

function loaduser(myuser) {
    var user1 = document.getElementById("user1"); 
    var user2 = document.getElementById("user2"); 
    var user3 = document.getElementById("user3"); 
    

    for (var i = 0; i<myuser.users.length; i++){
        let name = myuser.users[i].name;
        let location = myuser.users[i].location;
        let username = myuser.users[i].username;
        
        
        let imgUser = document.createElement("div");
        
        let txtUser = document.createElement("p");
        txtUser.innerHTML = `<p class="card-text"><strong> Name: </strong> ${name} <br> <strong>Title: </strong> ${title}<br> <strong>Description: </strong>${description}</p>`;
        
        
        if (myuser.users[i].id === 1) {
            user1.appendChild(txtUser);
            } else if (myuser.users[i].id === 2) {
            user2.appendChild(txtUser);
            } else  {
            user3.appendChild(txtUser);
        }
    }
}