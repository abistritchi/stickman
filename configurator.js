function getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v)
        n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) { return "-" + m.toLowerCase(); }), v[p]);
    return n
}

function addStickman() {

    var image = document.getElementById('myImage');

    console.log(image.width);

    margin = 20;

    l = image.offsetLeft;
    t = image.offsetTop;
    w = image.width;
    h = image.height;


    var
        //Head-Torso-X Head-Torso-Y
        Head1 = [101,263,'1h.png'],
        Head2 = [153, 306,'2h.png'],
        Head3 = [180, 234,'3h.png'],


        //Torso-Head-X Torso-Head-Y Torso-Left-Arm Torso-RightArm Torso-Left-Foot Torso-Right-Foot
        Torso7 = [165, 0, 91, 181, 240, 181, 0, 362, 330, 362,'7h.png'],
        Torso4 = [3, 0, 0, 188, 9, 188, 0,374, 6,374,'4h.png'],
        Torso5 = [111,0, 0,195, 221,195, 110,391, 100,391,'5h.png'],
        Torso6 = [5,0, 0,188, 9,188 ,0,376, 9,376,'6h.png'],


        LeftArm9= [346,339,'9h.png'],
        LeftArm8= [170,0,'8h.png'],
        LeftArm10= [197,197,'10h.png'],

        RightArm13 = [0, 346,'13h.png'],
        RightArm14 = [0, 0,'14h.png'],
        RightArm15 = [0, 250,'15h.png'],

        LeftFoot=[227,0],
        RightFoot=[0,0],

        Head,
        Torso,
        LeftArm,
        RightArm;

    if (document.getElementById('SelectedHead').value === "Head1"){Head = Head1;};
    if (document.getElementById('SelectedHead').value === "Head2"){Head = Head2;};
    if (document.getElementById('SelectedHead').value === "Head3"){Head = Head3;};

    if (document.getElementById('SelectedTorso').value === "Torso4"){Torso = Torso4;};
    if (document.getElementById('SelectedTorso').value === "Torso5"){Torso = Torso5;};
    if (document.getElementById('SelectedTorso').value === "Torso6"){Torso = Torso6;};
    if (document.getElementById('SelectedTorso').value === "Torso7"){Torso = Torso7;};

    if (document.getElementById('SelectedLeftArm').value === "LeftArm8"){LeftArm = LeftArm8;};
    if (document.getElementById('SelectedLeftArm').value === "LeftArm9"){LeftArm = LeftArm9;};
    if (document.getElementById('SelectedLeftArm').value === "LeftArm10"){LeftArm = LeftArm10;};

    if (document.getElementById('SelectedRightArm').value === "RightArm13"){RightArm = RightArm13;};
    if (document.getElementById('SelectedRightArm').value === "RightArm14"){RightArm = RightArm14;};
    if (document.getElementById('SelectedRightArm').value === "RightArm15"){RightArm = RightArm15;};





    // Location inside the image
    offX = parseInt(Math.random() * w);
    offY = parseInt(Math.random() * h);

    if(offX > margin) offX -= margin;
    if(offY > margin) offY -= margin;

    l += offX;
    t += offY;


    var torso = document.createElement("img");
    torso.setAttribute('src', Torso[10]);
    torso.setAttribute('class', 'overlays');
    torso.style.left = l + "px";
    torso.style.top = t + "px";
    document.body.appendChild(torso);



    var head = document.createElement("img");
    head.setAttribute('src', Head[2]);
    head.setAttribute('class', 'overlays opacity');
    head.style.left = l + Torso[0] - Head[0]  + "px";
    head.style.top = t  + Torso[1] - Head[1] + "px";
    document.body.appendChild(head);



    var leftArm = document.createElement("img");
    leftArm.setAttribute('src', LeftArm[2]);
    leftArm.setAttribute('class', 'overlays');
    leftArm.style.left = l + Torso[2] - LeftArm[0]  + "px";
    leftArm.style.top = t  + Torso[3] - LeftArm[1] + "px";
    document.body.appendChild(leftArm);



    var rightArm = document.createElement("img");
    rightArm.setAttribute('src', RightArm[2]);
    rightArm.setAttribute('class', 'overlays');
    rightArm.style.left = l + Torso[4] - RightArm[0] + "px";
    rightArm.style.top = t  + Torso[5] - RightArm[1] + "px";
    document.body.appendChild(rightArm);


    var leftFoot = document.createElement("img");
    leftFoot.setAttribute('src', '17h.png');
    leftFoot.setAttribute('class', 'overlays');
    leftFoot.style.left = l + Torso[6] - LeftFoot[0] + "px";
    leftFoot.style.top = t  + Torso[7] - LeftFoot[1] + "px";
    document.body.appendChild(leftFoot);


    var rightFoot = document.createElement("img");
    rightFoot.setAttribute('src', '16h.png');
    rightFoot.setAttribute('class', 'overlays');
    rightFoot.style.left = l + Torso[8] - RightFoot[0] + "px";
    rightFoot.style.top = t  + Torso[9] - RightFoot[1] + "px";
    document.body.appendChild(rightFoot);


    var bier = document.createElement("img");
    bier.setAttribute('src', 'bier.png');
    bier.setAttribute('class', 'overlays');
    bier.style.left = l + Torso[4] - RightArm[0] + 200 + "px";
    bier.style.top = t  + Torso[5] - RightArm[1]- 300 + "px";
    //document.body.appendChild(bier);


    var bulb = document.createElement("img");
    bulb.setAttribute('src', 'bulb.svg');
    bulb.setAttribute('class', 'overlays');
    bulb.setAttribute('width', 100);
    bulb.setAttribute('high', 200);
    bulb.appendChild( getNode('rect', { width:200, height:20, fill:'#ff0000' }) );
    bulb.style.left = l + Torso[4] - RightArm[0] + 300 + "px";
    bulb.style.top = t  + Torso[5] - RightArm[1] -50 + "px";
    //document.body.appendChild(bulb);

    var svg = getNode("svg");
    document.body.appendChild(svg);
    svg.setAttribute('class', 'overlays');
    svg.style.left = l + Torso[4] - RightArm[0] + 330 + "px";
    svg.style.top = t  + Torso[5] - RightArm[1] + -30+ "px";

    var rectangle = getNode('rect', { x: 10, y: 10, width: 100, height: 20, fill:'#ff00ff' });
    //svg.appendChild(rectangle);




    if (document.getElementById('pngImg').value === "bier"){document.body.appendChild(bier);};
    if (document.getElementById('pngImg').value === "bulb"){document.body.appendChild(bulb);};
    if (document.getElementById('pngImg').value === "svgImg"){svg.appendChild(rectangle);};

}
