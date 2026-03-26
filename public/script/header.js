const menu=[
    {label:"about",link:"/about"},
    {label:"profile",link:"/profile"},
    {label:"contact",link:"/contact"}
]

const container=`
<header>
    <h1 class="logo">site tittle</h1>
    <nav>
    ${
        menu.map(element => {
            return `<a href=${element.link}>${element.label}</a>`;
        })
    }
    </nav>
    <div class="profile">profile</div>
</header>
`

const Header=document.getElementById("header");
Header.innerHTML=container;
