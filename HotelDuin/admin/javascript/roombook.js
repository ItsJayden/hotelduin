var detailpanel = document.getElementById("guestdetailpanel");

adduseropen = () => {
    detailpanel.style.display = "flex";
}
adduserclose = () => {
    detailpanel.style.display = "none";
}

//search bar logic using js
const searchFun = () => {
    let filter = document.getElementById('search_bar').value.toUpperCase();

    let myTable = document.getElementById("table-data");

    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName('td')[0];
        let tdEmail = tr[i].getElementsByTagName('td')[1];
        let tdPhone = tr[i].getElementsByTagName('td')[2];

        if (tdName || tdEmail || tdPhone) {
            let nameValue = tdName.textContent || tdName.innerHTML;
            let emailValue = tdEmail.textContent || tdEmail.innerHTML;
            let phoneValue = tdPhone.textContent || tdPhone.innerHTML;

            if (
                nameValue.toUpperCase().indexOf(filter) > -1 ||
                emailValue.toUpperCase().indexOf(filter) > -1 ||
                phoneValue.toUpperCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

