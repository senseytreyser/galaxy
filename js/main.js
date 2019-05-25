window.onload = function() {
    var secondNavSide = document.getElementById("nav-2");

    document.addEventListener("click", handleClick);

    function handleClick(e){
        var target = e.target;

        if (target.classList.contains("nav__link") && !target.classList.contains("open")){
            secondNavSide.classList.add("open");
            return;
        } 
        
        if(secondNavSide.classList.contains("open") && !target.closest("#nav-2")){
            secondNavSide.classList.remove("open");
            return
        }

        return;
    }
}