function finalCost(){
    var roomType = document.getElementById("room_type").value;
    var roomNum = document.getElementById("room_number").value;
    var personNum = document.getElementById("person_number").value;
    var childNum = document.getElementById("child_number").value;
    var resFacilities = document.getElementById("res_facilities").value;

    var total = (parseInt(roomType)*10) + ((roomNum)*2) + ((personNum)*3) + ((childNum)*2) + ((resFacilities)*5)

    document.getElementById("result").innerHTML = total;
}