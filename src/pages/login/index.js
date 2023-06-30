
function retornarAoCadastro() {
    let btnReturn = document.getElementById("register")

    btnReturn.addEventListener('click', () => {
        window.location.assign("../../../src/pages/register/index.html")
    })
}
retornarAoCadastro()

const baseURL = "http://localhost:3333"

async function logarUsuário() {
    let userName = document.getElementById("login-user")
    let userPass = document.getElementById("login-password")
    let btnAccess = document.getElementsByClassName("login-button")[0]
    let alertWrongAcc = document.getElementById("wrong-acc")
    let allInputs = [userName, userPass]

    if (userName.value == "" || userPass.value == "") {
        btnAccess.disabled = true
    }
    else {
        btnAccess.disabled = false
    }

    allInputs.forEach((elem) => {
        elem.addEventListener('input', () => {

            alertWrongAcc.classList.add("hidden")
            userPass.style.border = "1px solid var(--gray600)"

            if (userName.value == "" || userPass.value == "") {
                btnAccess.disabled = true
            }
            else {
                btnAccess.disabled = false
            }

            if (btnAccess.disabled !== false) {
                btnAccess.classList.add("disabled-button")
            }
            else {
                btnAccess.classList.remove("disabled-button")
            }
        })
        if (btnAccess.disabled !== false) {
            btnAccess.classList.add("disabled-button")
        }
    })

    await btnAccess.addEventListener('click', () => {
        let div = document.createElement("div")
        div.classList = "spinner"
        div.innerText = "•"
        btnAccess.innerText = ""
        btnAccess.append(div)

        setTimeout(() => {
            btnAccess.innerText = ""
            btnAccess.innerText = "Acessar"
        }, 1500)

        let userData = {
            "email": userName.value,
            "password": userPass.value
        }

        const response = fetch(`${baseURL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((response) => {
                if (response.status !== 200) {
                    alertWrongAcc.classList.remove("hidden")
                    userPass.style.border = "1px solid var(--alert100)"
                }
                else {
                    window.location.assign("../../../src/pages/home/index.html")
                }
                return response.json()
            })
            .then((responseJson) => {
                localStorage.setItem("usuarioPetinfo", responseJson.token)
                return responseJson
            })
            .catch((error) => error);

        return response
    })
}
logarUsuário()