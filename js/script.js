const shareBtn = document.querySelector(".share-btn");
const shareBar = document.querySelector(".share-active");

shareBtn.addEventListener("click", function() {
	shareBar.classList.toggle("active");
	console.log("Success")
})