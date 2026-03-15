let total = 0;

function addExpense(){

let desc = document.getElementById("desc").value;

let amount = parseFloat(document.getElementById("amount").value);

let budget = parseFloat(document.getElementById("budget").value) || 0;

if(desc === "" || isNaN(amount)){

alert("Enter valid expense");

return;

}

let li = document.createElement("li");

li.innerHTML = `
<span>${desc}</span>
<span>₹${amount}</span>
`;

document.getElementById("list").appendChild(li);

total += amount;

document.getElementById("total").textContent = total;

let remaining = budget - total;

document.getElementById("remaining").textContent = remaining;

let percent = budget ? (total / budget) * 100 : 0;

document.getElementById("progressFill").style.width = percent + "%";

document.getElementById("desc").value="";
document.getElementById("amount").value="";

}