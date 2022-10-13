function openForm() {
    let status = document.getElementById("appointmentForm").style.display;
    if (status == "block") {
        document.getElementById("appointmentForm").style.display = "none";
    }
    else {
        document.getElementById("appointmentForm").style.display = "block";
    }
  }
  
  function closeForm() {
    document.getElementById("appointmentForm").style.display = "none";
  }
