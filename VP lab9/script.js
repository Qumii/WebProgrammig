// a və b dəyərlərini istifadəçidən daxil etmək
var a = parseInt(prompt("a dəyərini daxil edin:"));
var b = parseInt(prompt("b dəyərini daxil edin:"));

// a və b dəyərlərinin doğruluğunu yoxlamaq
if (isNaN(a) || isNaN(b)) {
    alert("Xahiş olunur düzgün ədədlər daxil edin!");
} else {
    // Ədədləri göstərmək və işləmək üçün funksiya çağırmaq
    findNumbers(a, b);
}

function findNumbers(a, b) {
    // Tək və 3-ə bölünən ədədləri saxlamaq üçün massiv yaratmaq
    var result = [];

    // [a, b] intervalına daxil olan ədədləri yoxlamaq
    for (var i = a; i <= b; i++) {
        // Ədədi 3-ə bölüb bölünməyini yoxlamaq
        if (i % 2 === 1 || i % 3 === 0) {
            // Tək və ya 3-ə bölünən ədədləri result massivinə əlavə etmək 
            result.push(i);
            document.querySelector('.netice').innerHTML=result
        }
    }

   
}