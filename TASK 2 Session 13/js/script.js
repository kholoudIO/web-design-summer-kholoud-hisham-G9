var users = []

if (document.getElementById('userForm')) {

    var form = document.getElementById('userForm')

    form.addEventListener('submit', (e) => {

        e.preventDefault()

        var obj = {
            name: e.target[0].value,
            email: e.target[1].value
        }

        users.push(obj)

        console.table(users)

        showUser()
    })
}


function showUser() {

    var cardsCont = document.getElementById('cards-container')

    // Remove the previous user
    cardsCont.innerHTML = ""

    var divElement = document.createElement('div')
    var h4Name = document.createElement('h4')
    var h4Email = document.createElement('h4')

    h4Name.innerText = users[users.length - 1].name
    h4Email.innerText = users[users.length - 1].email

    divElement.appendChild(h4Name)
    divElement.appendChild(h4Email)

    divElement.classList.add('alert', 'alert-primary')

    cardsCont.appendChild(divElement)

    console.log(divElement)
}