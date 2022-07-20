name_of_the_student_array = [];
function submit()

{
    var display_students_Array = [];

    
    for (var i = 1; i<= 4 ; i++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_" + i).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }

    console.log(name_of_the_student_array);

    var length_of_the_name_of_the_student_array = name_of_the_student_array.length;
    console.log(length_of_the_name_of_the_student_array);

    for (var j= 0; j< length_of_the_name_of_the_student_array; j++);
    {
        display_students_Array.push("<h4>Name -" + name_of_the_student_array[j] + "</h4>");
        console.log(display_students_Array);
    }
    console.log(display_students_Array);
    document.getElementById("display_name_with_commas").innerHTML = display_students_Array;

    var remove_commas = display_students_Array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";   
    document.getElementById("sort_button").style.display = "inline-block";

     
}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_students_Array_sorting = [];

    var length_of_the_name_of_the_student_array =name_of_the_student_array.length;
    console.log(length_of_the_name_of_the_student_array);

    for (var j= 0; j< length_of_the_name_of_the_student_array; j++);
    {
        display_students_Array_sorting.push("<h4>Name -" + name_of_the_student_array[j] + "</h4>");
        console.log(display_students_Array_sorting);
    }

    var remove_commas = display_students_Array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


}