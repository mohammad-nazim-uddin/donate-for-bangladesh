document.getElementById('show-donation-home').addEventListener('click',function(){
    showSectionById('donation-home')
})

document.getElementById('show-donation-history').addEventListener('click',function(){
    showSectionById('donation-history')
})


//Toggle the Action button 

function donationBtn() {
    const buttonHome = document.getElementById("show-donation-home");
    buttonHome.style.backgroundColor = "#B4F461";
  }

  
  function historyBtn() {
    const buttonHistory = document.getElementById("show-donation-history");
    buttonHistory.style.backgroundColor = "#B4F461";
  }

  
  const buttonHistory = document.getElementById("show-donation-history");
  buttonHistory.addEventListener("click", function() {
    
    buttonHistory.style.backgroundColor = "#cecece";
    donationBtn();
  });

  
  const buttonHome = document.getElementById("show-donation-home");
  buttonHome.addEventListener("click", function() {
    // Change its background to green and make the other button white
    buttonHome.style.backgroundColor = "#cecece";
    historyBtn();
  });