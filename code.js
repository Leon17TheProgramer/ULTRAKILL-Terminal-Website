//let weapons = document.getElementById("weapons").innerHTML;
//let enemies = document.getElementById("enemies").innerHTML;
//let thecybergrind = document.getElementById("thecybergrind").innerHTML;
//let sandbox = document.getElementById("sandbox").innerHTML;
//let options = document.getElementById("options").innerHTML;

function returnmenuright(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--TIP OF THE DAY--</p>
    </div>

    <div class="tip">
        <p class="tip-text">Enemies <span style="color: rgb(255, 123, 0)">can hurt</span> other <br> enemy types.</p>
        <p class="tip-text">With quick thinking and <br> positioning, powerful <br> enemies can turn into <br> powerful weapons.</p>
    </div>
</div>`
}
function returnmenuleft(){
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
    <p class="menu2">--MENU--</p>
</div>

<div class="buttons">
    <button id="weapons"class="weapons vcr-osd-mono-regular" onclick="weaponmenu()">
        WEAPONS
    </button>
    <button id="enemies" class="enemies vcr-osd-mono-regular" onclick="enemymenu()">
        ENEMIES
    </button>
    <button id="thecybergrind" class="thecybergrind vcr-osd-mono-regular" onclick="tcgmenu()">
        THE CYBER GRIND
    </button>
    <button id="sandbox" class="sandbox vcr-osd-mono-regular" onclick="sandboxmenu()">
        SANDBOX
    </button>
    <button id="options" class="options vcr-osd-mono-regular" onclick="optionsmenu()">
        OPTIONS
    </button>
</div>`
}
function weaponmenu(){
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
    <p class="menu2">--MENU--</p>
</div>

<div class="buttons">
    <button class="revolver vcr-osd-mono-regular" onclick="revolver()">
        REVOLVER
    </button>
    <button class="shotgun vcr-osd-mono-regular" onclick="shotgun()">
        SHOTGUN
    </button>
    <button class="nailgun vcr-osd-mono-regular" onclick="nailgun()">
        NAILGUN
    </button>
    <button class="railcannon vcr-osd-mono-regular" onclick="railcannon()">
        RAILCANNON
    </button>
    <button class="rocketlauncher vcr-osd-mono-regular" onclick="rocketlauncher()">
        ROCKET LAUNCHER
    </button>
    <button class="arms vcr-osd-mono-regular" onclick="arms()">
        ARMS
    </button>
    <button class="return-left vcr-osd-mono-regular" onclick="returnmenumain()">
        BACK
    </button>
</div>`
   
}
function enemymenu(){
    let rightBox = document.getElementById("right-box");
    //rightBox.innerHTML =
}
function tcgmenu(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">THE CYBER GRIND</p>
    </div>
    <div class="tip">
        <p class="tip-text"><span style="color: rgb(199, 0, 0)">The Cyber Grind</span> is an <br> endless survival mode.</p>
        <p class="tip-text">Good performance gives many<br><span style="color: rgb(199, 0, 0)">points</span>.</p>
        <p class="warning">Progress in the current <br> mission will be lost.</p>
        <button class="enter-the-tcg vcr-osd-mono-regular" onclick="tcgsettings()">
            ENTER THE CYBER GRIND
        </button>
        <button class="exit vcr-osd-mono-regular" onclick="returnmenuright()">
        RETURN
        </button>
    </div>
</div>`
}
function sandboxmenu(){

    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">SANDBOX</p>
    </div>
    <div class="tip">
        <p class="tip-text">The <span style="color:rgb(82, 121, 206)">Sandbox</span> is an empty <br> level that can be used for <br> practicing.</p>
        <p class="warning">Progress in the current <br> mission will be lost.</p>
        <button class="enter-the-sandbox vcr-osd-mono-regular" onclick="sandboxsettings()">
            ENTER THE SANDBOX
        </button>
        <button class="exit vcr-osd-mono-regular" onclick="returnmenuright()">
        RETURN
        </button>
    </div>
</div>`
   
}
function optionsmenu(){
    let rightBox = document.getElementById("right-box");
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
        <p class="options-text">--OPTIONS--</p>
    </div>
                    
    <div class="buttons">
        <button id="general"class="general vcr-osd-mono-regular" onclick="generalmenu()">
            GENERAL
        </button>
        <button id="controls" class="controls vcr-osd-mono-regular" onclick="controlsmenu()">
            CONTROLS
        </button>
        <button id="graphics" class="graphics vcr-osd-mono-regular" onclick="graphicsmenu()">
            GRAPHICS
        </button>
        <button id="audio" class="audio vcr-osd-mono-regular" onclick="GODDAMNTHEAUDIO()">
            AUDIO
        </button>
        <button id="credits" class="credits vcr-osd-mono-regular" onclick="creditsscreen()">
            CREDITS
        </button>
        <button id="back" class="return-main vcr-osd-mono-regular" onclick="areyousure()">
            RETURN TO MISSION
        </button>
    </div>`
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--OPTIONS--</p>
    </div>
    <div class="tip">
        <p class="tip-text">[[PLACEHOLDER]]</p>
    </div>
</div>`
}
function tcgsettings(){
    let rightBox = document.getElementById("right-box");
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
    <p class="menu2">--MENU--</p>
</div>

<div class="buttons">
    <button id="minigame" class="minigame vcr-osd-mono-regular" onclick="minigame()">
        PLAY
    </button>
    <button id="theme" class="themes vcr-osd-mono-regular" onclick="themesmenu()">
        THEMES
    </button>
    <button id="music" class="songs vcr-osd-mono-regular" onclick="musicmenu()">
        MUSIC
    </button>
    <button id="pattern" class="patterns vcr-osd-mono-regular" onclick="patternsmenu()">
        PATTERNS
    </button>
    <button id="wave" class="waves vcr-osd-mono-regular" onclick="wavemenu()">
        WAVES
    </button>
    <button id="back" class="return-main vcr-osd-mono-regular" onclick="areyousure()">
        RETURN TO MISSION
    </button>
</div>`
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">CYBER GRIND</br>SETTINGS</p>
    </div>

    <div class="tip">
        <p class="tip-text">This Terminal is used for</br>Cyber Grind customization</p>
    </div>
</div>`
}
function returnmenumain(){
    let rightBox = document.getElementById("right-box");
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
    <p class="menu2">--MENU--</p>
</div>

<div class="buttons">
    <button id="weapons"class="weapons vcr-osd-mono-regular" onclick="weaponmenu()">
        WEAPONS
    </button>
    <button id="enemies" class="enemies vcr-osd-mono-regular" onclick="enemymenu()">
        ENEMIES
    </button>
    <button id="thecybergrind" class="thecybergrind vcr-osd-mono-regular" onclick="tcgmenu()">
        THE CYBER GRIND
    </button>
    <button id="sandbox" class="sandbox vcr-osd-mono-regular" onclick="sandboxmenu()">
        SANDBOX
    </button>
    <button id="options" class="options vcr-osd-mono-regular" onclick="optionsmenu()">
        OPTIONS
    </button>
</div>
</div>`
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--TIP OF THE DAY--</p>
    </div>

    <div class="tip">
        <p class="tip-text">Enemies <span style="color: rgb(255, 123, 0)">can hurt</span> other <br> enemy types.</p>
        <p class="tip-text">With quick thinking and <br> positioning, powerful <br> enemies can turn into <br> powerful weapons.</p>
    </div>
</div>`
}
function themesmenu(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--THEMES--</p>
    </div>

    <div class="tip">
        <p class="tip-text">Select the visual theme <br> for the arena</p>
        <div class="themebuttondiv">
            <button class="theme-button vcr-osd-mono-regular" onclick="lighttheme()">Light</button>
            <button class="theme-button vcr-osd-mono-regular" onclick="darktheme()">Dark</button>
            <button class="theme-button vcr-osd-mono-regular" onclick="customtheme()">Custom</button>
            <button class="exit vcr-osd-mono-regular" onclick="tcgsettings()">RETURN</button>
        </div>
    </div>
</div>`
}
function wavemenu(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--WAVES--</p>
    </div>

    <div class="tip">
        <p class="wave-text">SELECT STARTING WAVE:</p>
        <p class="wave-text">(Highest reached Wave must be at <br> least twice as high)</p>
        <div class="wave-buttons-div">
            <div class="buttons-left">
                <button class="wave-button vcr-osd-mono-regular" onclick="startwave1()">1</button>
                <button class="wave-button vcr-osd-mono-regular" onclick="startwave10()">10</button>
                <button class="wave-button vcr-osd-mono-regular" onclick="startwav20()">20</button>
            </div>
            <div class="buttons-right">
                <button class="wave-button vcr-osd-mono-regular" onclick="startwave5()">5</button>
                <button class="wave-button vcr-osd-mono-regular" onclick="startwave15()">15</button>
                <button class="wave-button vcr-osd-mono-regular" onclick="startwave25()">25</button>
            </div>
        </div>
        <button class="exit vcr-osd-mono-regular" onclick="tcgsettings()">RETURN</button>
    </div>
</div>`
}
function areyousure(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">PREVIOUS MISSION</p>
    </div>

    <div class="tip">
        <p class="tip-text"><span style="color: rgb(199, 0, 0)">Returning to:</span><br>MAIN MENU</p>
        <button class="main-menu-exit vcr-osd-mono-regular" onclick="returnmenumain()">RETURN</button>
    </div>
</div>`
}
function sandboxsettings(){
    let rightBox = document.getElementById("right-box");
    let leftBox = document.getElementById("left-box");
    leftBox.innerHTML = `<div class="menu1">
    <p class="sandbox-main-title">--SANDBOX--</p>
</div>

<div class="buttons">
    <button id="day" class="timesetday vcr-osd-mono-regular" onclick="day()">
        TIME OF DAY
    </button>
    <button id="world" class="world-options vcr-osd-mono-regular" onclick="worldoptions()">
        WORLD OPTIONS
    </button>
    <button id="icon" class="icon-packs vcr-osd-mono-regular" onclick="iconpacks()">
        ICONS
    </button>
    <button id="back" class="return-main vcr-osd-mono-regular" onclick="areyousure()">
        RETURN TO MISSION
    </button>
</div>`
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--STATS--</p>
    </div>

    <div class="sandbox-text-box">
        <p class="sandbox-text-stats"><span style="color: rgb(255, 123, 0)">0</span> - TOTAL BOXES BUILT</p>
        <p class="sandbox-text-stats"><span style="color: rgb(255, 123, 0)">0</span> - TOTAL PROPS PLACED</p>
        <p class="sandbox-text-stats"><span style="color: rgb(255, 123, 0)">0</span> - TOTAL ENEMIES SPAWNED</p>
        <p class="sandbox-text-stats"><span style="color: rgb(255, 123, 0)">0.0h</span> - TOTAL TIME IN SANDBOX</p>
    </div>
</div>`
}
function day(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="construct-images">
        <div class="top-imgs">
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_dawn.png" alt="Construct Dawn" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_day.png" alt="Construct Day" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_dusk.png" alt="Construct Dusk" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_night.png" alt="Construct Night" onclick="">
            </div>
        </div>
        <div class="bottom-imgs">
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_night_darker.png" alt="Construct Darker Night" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_lust.png" alt="Construct Lust" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_greed.png" alt="Construct Greed" onclick="">
            </div>
            <div class="const-img">
                <img class="const-img" src="assets/construct/construct_foggy.png" alt="Construct Foggy" onclick="">
            </div>
        </div>
        <button class="exit vcr-osd-mono-regular" onclick="sandboxsettings()">CLOSE</button>
    </div>`
}
function worldoptions(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--WORLD OPTIONS--</p>
    </div>
    <div class="world-buttons">
        <div id="toggle" class="border-button">
            <div class="icon-box">
                <img class="border-icon" src="assets/Sprite/MapBorder.png" alt="Map Border">
            </div>
            
            <div class="border-text">
                <p class="border-text1">MAP BORDER</p>
                <p class="border-text2">ENABLED</p>
            </div>
            <button class="toggle-border vcr-osd-mono-regular" onclick="toggleborderoff()">DISABLE</button>
        </div>
    </div>
    <button class="exit vcr-osd-mono-regular" onclick="sandboxsettings()">CLOSE</button>
</div>`
}
function toggleborderoff(){
    let toggle = document.getElementById("toggle");
    toggle.innerHTML = `<div class="icon-box">
                <img class="border-icon" style="opacity: 70%" src="assets/Sprite/MapBorder.png">
            </div>
            
            <div class="border-text">
                <p class="border-text1">MAP BORDER</p>
                <p class="border-text2">DISABLED</p>
            </div>
            <button class="toggle-border vcr-osd-mono-regular" onclick="toggleborderon()">ENABLE</button>`
}
function toggleborderon(){
    let toggle = document.getElementById("toggle");
    toggle.innerHTML = `<div class="icon-box">
                <img class="border-icon" src="assets/Sprite/MapBorder.png">
            </div>
            
            <div class="border-text">
                <p class="border-text1">MAP BORDER</p>
                <p class="border-text2">ENABLED</p>
            </div>
            <button class="toggle-border vcr-osd-mono-regular" onclick="toggleborderoff()">DISABLE</button>`
}
function iconpacks(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--ICON PACKS--</p>
    </div>
    <div class="icon-packs-options">
        <div class="default-pack">
            <div class="hakita">
                <img class="default-melon" src="assets/Sprite/Melon.png" alt="Default Melon">
            </div>
            <p class="desc">DEFAULT</p>
        </div>
        
        <div class="pitr-pack">
            <div class="pitr">
                <img class="pitr-melon" src="assets/Sprite/MelonIcon.png" alt="Pitr Melon">
            </div>
            
            <p class="desc">PITR</p>
        </div>
    </div>
    <button class="exit vcr-osd-mono-regular" onclick="sandboxsettings()">CLOSE</button>
</div>`
}
function revolver(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <div id="order-piercer" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderuppiercer()">˄</button>
                <p class="number-display">1</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownpiercer()">˅</button>
        </div>
        <img id="change-weapon-piercer-img" class="blue weapon-img" src="assets/weapons/SingleRevolver.png" alt="Piercer Revolver">
        <div class="piercer-text">
            <p class="piercer1">PIERCER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-piercer-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatepiercer()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequippiercer()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatepiercer()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <div id="order-marksman" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupmarks()">˄</button>
                <p class="number-display">2</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownmarks()">˅</button>
        </div>
        <img id="change-weapon-marksman-img" class="green weapon-img" src="assets/weapons/RevolverSpecial.png" alt="Marksman Revolver">
        <div class="piercer-text">
            <p class="piercer1">MARKSMAN</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-marksman-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatemarks()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipmarks()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatemarks()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <div id="order-sharpshooter" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderuppiercer()">˄</button>
                <p class="number-display">3</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownpiercer()">˅</button>
        </div>
        <img id="change-weapon-sharpshooter-img" class="red weapon-img" src="assets/weapons/RevolverSharp.png" alt="Sharpshooter Revolver">
        <div class="piercer-text">
            <p class="piercer1">SHARPSHOOTER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-sharpshooter-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatepiercer()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipsharp()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatesharp()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <button class="weapon-info vcr-osd-mono-regular">INFO</button>
        <button class="weapon-color vcr-osd-mono-regular">COLOR</button>
    </div>
</div>`
}
function shotgun(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <div id="order-core" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupcore()">˄</button>
                <p class="number-display">1</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdowncore()">˅</button>
        </div>
        <img id="change-weapon-corer-img" class="blue weapon-img" src="assets/weapons/Shotgun.png" alt="Core Eject Shotgun">
        <div class="piercer-text">
            <p class="piercer1">CORE EJECT</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-core-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatecore()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipcore()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatecore()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <div id="order-pump" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderuppump()">˄</button>
                <p class="number-display">2</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownpump()">˅</button>
        </div>
        <img id="change-weapon-pump-img" class="green weapon-img" src="assets/weapons/Shotgun1.png" alt="Pump Charge Shotgun">
        <div class="piercer-text">
            <p class="piercer1">PUMP CHARGE</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-pump-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatepump()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequippump()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatepump()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <div id="order-chainsaw" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupchainsaw()">˄</button>
                <p class="number-display">3</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownchainsaw()">˅</button>
        </div>
        <img id="change-weapon-chainsaw-img" class="red weapon-img" src="assets/weapons/ShotgunSaw.png" alt="Sawed-on Shotgun">
        <div class="piercer-text">
            <p class="piercer1">SAWED-ON</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-chainsaw-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatechainsaw()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipchainsaw()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatechainsaw()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <button class="weapon-info vcr-osd-mono-regular">INFO</button>
        <button class="weapon-color vcr-osd-mono-regular">COLOR</button>
    </div>
</div>`
}
function nailgun(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <div id="order-attract" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupattract()">˄</button>
                <p class="number-display">1</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownattract()">˅</button>
        </div>
        <img id="change-weapon-attract-img" class="blue weapon-img" src="assets/weapons/Nailgun2.png" alt="Attractor Nailgun">
        <div class="piercer-text">
            <p class="piercer1">ATTRACTOR</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-attractr-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternateattract()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipattract()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternateattract()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <div id="order-overheat" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupoverheat()">˄</button>
                <p class="number-display">2</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownoverheat()">˅</button>
        </div>
        <img id="change-weapon-overheat-img" class="green weapon-img" src="assets/weapons/NailgunOverheat.png" alt="Overheat Nailgun">
        <div class="piercer-text">
            <p class="piercer1">OVERHEAT</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-overheat-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternateoverheat()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipoverheat()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternateoverheat()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <div id="order-jumpstart" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupjumpstart()">˄</button>
                <p class="number-display">3</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownjumpstart()">˅</button>
        </div>
        <img id="change-weapon-jumpstart-img" class="red weapon-img" src="assets/weapons/NailgunZapper.png" alt="Jumpstart Nailgun">
        <div class="piercer-text">
            <p class="piercer1">JUMPSTART</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-jumpstart-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponalternatejumpstart()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipjumpstart()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponalternatejumpstart()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <button class="weapon-info vcr-osd-mono-regular">INFO</button>
        <button class="weapon-color vcr-osd-mono-regular">COLOR</button>
    </div>
</div>`
}
function railcannon(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <div id="order-electric" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupelectric()">˄</button>
                <p class="number-display">1</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownelectric()">˅</button>
        </div>
        <img id="change-weapon-electric-img" class="blue weapon-img" src="assets/weapons/Railcannon.png" alt="Electric Railcannon">
        <div class="piercer-text">
            <p class="piercer1">ELECTRIC</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-electric-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipelectric()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipelectric()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipelectric()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <div id="order-screw" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupscrew()">˄</button>
                <p class="number-display">2</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownscrew()">˅</button>
        </div>
        <img id="change-weapon-screw-img" class="green weapon-img" src="assets/weapons/railcannonscrew.png" alt="Screwdriver Railcannon">
        <div class="piercer-text">
            <p class="piercer1">SCREWDRIVER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-screw-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipscrew()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipscrew()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipscrew()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <div id="order-mal" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupmal()">˄</button>
                <p class="number-display">3</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownmal()">˅</button>
        </div>
        <img id="change-weapon-mal-img" class="red weapon-img" src="assets/weapons/railcannonmalicious.png" alt="Malicious Railcannon">
        <div class="piercer-text">
            <p class="piercer1">MALICIOUS</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-mal-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipmal()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipmal()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipmal()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <button class="weapon-info vcr-osd-mono-regular">INFO</button>
        <button class="weapon-color vcr-osd-mono-regular">COLOR</button>
    </div>
</div>`
}
function rocketlauncher(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <div id="order-freeze" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupfreeze()">˄</button>
                <p class="number-display">1</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownfreeze()">˅</button>
        </div>
        <img id="change-weapon-freeze-img" class="blue weapon-img" src="assets/weapons/rocketlauncher.png" alt="Freezeframe Rocket Launcher">
        <div class="piercer-text">
            <p class="piercer1">FREEZEFRAME</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-freeze-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipfreeze()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipfreeze()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipfreeze()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <div id="order-cannon" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupcannon()">˄</button>
                <p class="number-display">2</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdowncannon()">˅</button>
        </div>
        <img id="change-weapon-cannon-img" class="green weapon-img" src="assets/weapons/rocketlaunchercannon.png" alt="S.R.S. Cannon Rocket Launcher">
        <div class="piercer-text">
            <p class="piercer1">S.R.S. CANNON</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-cannon-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipcannon()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipcannon()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipcannon()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <div id="order-fire" class="order-buttons vcr-osd-mono-regular">
            <button class="order-up vcr-osd-mono-regular" onclick="orderupfire()">˄</button>
                <p class="number-display">3</p>
            <button class="order-down vcr-osd-mono-regular" onclick="orderdownfire()">˅</button>
        </div>
        <img id="change-weapon-fire-img" class="red weapon-img" src="assets/weapons/rocketlaunchergasoline.png" alt="Firestarter Rocket Launcher">
        <div class="piercer-text">
            <p class="piercer1">FIRESTARTER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-fire-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipfire()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipfire()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipfire()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <button class="weapon-info vcr-osd-mono-regular">INFO</button>
        <button class="weapon-color vcr-osd-mono-regular">COLOR</button>
    </div>
</div>`
}
function arms(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="weaponbox">
    <div class="blue-var">
        <img id="change-weapon-backer-img" class="blue arm-img" src="assets/weapons/FistIcon-1.png" alt="Feedbacker Arm">
        <div class="piercer-text">
            <p class="piercer1">FEEDBACKER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-backer-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipbacker()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipbacker()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipbacker()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="red-var">
        <img id="change-weapon-screw-img" class="red arm-img" src="assets/weapons/FistIcon-1.png" alt="Knuckleblaster Arm">
        <div class="piercer-text">
            <p class="piercer1">KNUCKLEBLASTER</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-knuckle-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipknuckle()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipknuckle()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipknuckle()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="green-var">
        <img id="change-weapon-mal-img" class="green arm-img" src="assets/weapons/FistIcon-1.png" alt="Whiplash Arm">
        <div class="piercer-text">
            <p class="piercer1">WHIPLASH</p>
            <p class="piercer2">ALREADY OWNED</p>
        </div>
        <div id="change-weapon-whip-type" class="equip-buttons-box">
            <div class="equip-box" onclick="changeweaponunequipwhip()">
                <p class="equip-text">EQUIPPED</p>
            </div>
            <div class="equip-buttons vcr-osd-mono-regular">
                <button class="equip-left vcr-osd-mono-regular" onclick="changeweaponunequipwhip()">˂˂</button>
                <button class="equip-right vcr-osd-mono-regular" onclick="changeweaponunequipwhip()">˃˃</button>
            </div>
        </div>
    </div>
    <div class="gold-var">
        <img id="change-weapon-unknown-img" class="gold arm-img" src="assets/weapons/questionMark-1.png" alt="Unknown Arm">
        <div class="piercer-text">
            <p class="piercer1">???</p>
            <p class="piercer2">UNDER CONSTRUCTION</p>
        </div>
    </div>
</div>`
}
function creditsscreen(){
    let rightBox = document.getElementById("right-box");
    rightBox.innerHTML = `<div class="tipbox">
    <div class="tiptitle">
        <p class="title">--CREDITS--</p>
    </div>
    <div class="icon-packs-options">
        <div class="default-pack">
            <div class="hakita-pfp-box">
                <img class="hakita-image" src="assets/icons/HakitaIcon.png" alt="Hakita">
            </div>
            <p class="desc">Hakita, Creator of<br>Ultrakill</p>
        </div>
        
        <div class="pitr-pack">
            <div class="l17-pfp-box">
                <img class="l17-image" src="assets/icons/L17Icon.png" alt="Leon17">
            </div>
            
            <p class="desc">Leon17, A random fan</p>
        </div>
    </div>
    <button class="exit vcr-osd-mono-regular" onclick="optionsmenu()">CLOSE</button>
</div>`
}
