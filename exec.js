fetch("data.json")
.then(response => response.json())
.then(myuser => loaduser(myuser));

function loaduser(myuser) {
    var user1 = document.getElementById("user1"); 
    var user2 = document.getElementById("user2"); 
    var user3 = document.getElementById("user3"); 
    var user4 = document.getElementById("user4"); 
    var user5 = document.getElementById("user5"); 
    var user6 = document.getElementById("user6"); 
    var user7 = document.getElementById("user7"); 
    var user8 = document.getElementById("user8");
    var user9 = document.getElementById("user9"); 
    
    

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
            } else if (myuser.users[i].id === 3) {
            user3.appendChild(txtUser);
            } else if (myuser.users[i].id === 4) {
            user4.appendChild(txtUser);
            }else if (myuser.users[i].id === 5) {
            user5.appendChild(txtUser);
            } else if (myuser.users[i].id === 6) {
            user6.appendChild(txtUser);
            } else if (myuser.users[i].id === 7) {
            user7.appendChild(txtUser);
            }else if (myuser.users[i].id === 8) {
            user8.appendChild(txtUser);
            }
            else if (myuser.users[i].id === 9) {
                user9.appendChild(txtUser);
            }
        }
    
        
    }