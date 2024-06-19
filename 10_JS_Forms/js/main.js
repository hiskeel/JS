function formSubmit(e) {
    e.preventDefault(); // прериваємо подію

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const cred = { 
        email: email,
        password: password
    }

    console.log(cred);
}

let phoneCount = 1;

function addPhone() {
    const div = document.getElementById("phones");

    const phone = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    label.innerText = `Phone ${phoneCount}`;

    phone.setAttribute("display", "grid");
    input.setAttribute("id", `phone${phoneCount}`);
    input.setAttribute("name", `phone${phoneCount}`);
    input.setAttribute("type", `tel`);

    label.onclick = () => {
        const last = div.lastChild;
        div.removeChild(last);
        phoneCount--;
    };

    phoneCount++;

    phone.appendChild(label);
    phone.appendChild(input);
    div.appendChild(phone);
}

function changeColor() {
    const color = document.getElementById("colorInput").value;
    const form = document.forms["signinForm"];
    form.style["background-color"] = color;
}