var update_name;
var update_img;

update_img=[
 
]


update_name =[
    "Grandpa",
    "Grandma",
    "Mom",
    "Dad",
    "Me"
];


function update(){
    var name_1=document.getElementById("grandpa").value;
    var name_2=document.getElementById("grandma").value;
    var name_3=document.getElementById("mother").value;
    var name_4=document.getElementById("father").value;
    var name_5=document.getElementById("me").value;

    var img_1=document.getElementById("grandpa").value;
    var img_2=document.getElementById("grandma").value;
    var img_3=document.getElementById("mother").value;
    var img_4=document.getElementById("father").value;
    var img_5=document.getElementById("me").value;

    update_name.push(name_1);
    update_name.push(name_2);
    update_name.push(name_3);
    update_name.push(name_4);
    update_name.push(name_5);

    update_img.push(img_1);
    update_img.push(img_2);
    update_img.push(img_3);
    update_img.push(img_4);
    update_img.push(img_5);


    console.log(update_name);

    console.log(update_img);

    ocument.getElementById("display_name").innerHTML=update_name;
    ocument.getElementById("display_name").innerHTML=update_img;
        

}


