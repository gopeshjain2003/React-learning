const element = document.getElementById('root') ;

const reactElement = {

    type : 'a' , 

    prop : {

        href : 'https://google.com' ,
        target : '_blank'

    } ,

    text_prop : 'Visit to Google !'
} ;

function renderMain(element , container) 
{
    const tagA = document.createElement(element.type) ;
    tagA.innerHTML = element.text_prop ;

    tagA.setAttribute( `href`, `${element.prop.href}`) ;
    tagA.setAttribute( `target` , `${element.prop.target}`) ;

    container.appendChild(tagA) ;
}

renderMain(reactElement , element) ;