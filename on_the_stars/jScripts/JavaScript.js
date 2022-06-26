///*הגדרת משתנה ששווה ל-1
var slideIndex = 1;

//הפעלת הפונקציה במספר 1
showSlides(slideIndex);

/*//פנוקציה המופעלת ברגע שלוחצים על החיצים ומגדילה את המספר ב-1 כדי שהתמונה הבאה תופיע*/
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/*//פנוקציה המופעלת ברגע שלוחצים על אחת התמונות ומגדירה את המספר של התמונה הרלוונטית*/
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//פונקציה המכילה בתוכה את כל הפעולות
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    //אם מספר התמונה גדול מהאורך של כל התמונות אז המשתנה חוזר להיות 1
    if (n > slides.length) { slideIndex = 1 }
    //אם מספר התמונה קטן מ-1 אז המשתנה שווה לאורך של כל התמונות
    if (n < 1) { slideIndex = slides.length }

    /*בכל סיבוב שהתמונות יהיו מוסתרות  */
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //בכל סיבוב שיראו את כל התמונות הקטנות ושהן יהיו מופעלות
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //התמונה הגדולה במקום של המשתנה פחות אחד שתהיה בדיספליי מסויים
    slides[slideIndex - 1].style.display = "block";
    //התמונה הקטנה במקום של המשתנה פחות אחד תהיה מופעלת
    dots[slideIndex - 1].className += " active";
    //בכל פעם שהפונקציה מופעלת שהטקסט של התמונה הרלוונטית יופיע
    captionText.innerHTML = dots[slideIndex - 1].alt;
}