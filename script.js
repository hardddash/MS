function validateForm()
{
    var x;
    x=document.forms["myForm"]["first_name"].value;
    if ((document.forms["myForm"]["last_name"].value == null) || (document.forms["myForm"]["last_name"].value == "")) x = null;
    if ((document.forms["myForm"]["birthday"].value == null) || (document.forms["myForm"]["birthday"].value == "")) x = null;
    if ((document.forms["myForm"]["gender"].value == null) || (document.forms["myForm"]["gender"].value == "")) x = null;
    if ((document.forms["myForm"]["country"].value == null) || (document.forms["myForm"]["country"].value == "")) x = null;
    if ((document.forms["myForm"]["email"].value == null) || (document.forms["myForm"]["email"].value == "")) x = null;
    if ((document.forms["myForm"]["password"].value == null) || (document.forms["myForm"]["password"].value == "")) x = null;
    if ((document.forms["myForm"]["address"].value == null) || (document.forms["myForm"]["address"].value == "")) x = null;



    if (x==null || x=="")
    {
        alert("All lines with * must be filled");
        return false;
    }
}
document.forms["myForm"].onsubmit = function(){
    location.reload(true);
}