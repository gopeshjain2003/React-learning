// Step 3 : Created Function !
function customeRender(reactElement , container) 
{
    // Modular 1 :
    /*
    const domElement = document.createElement(reactElement.type) ;

    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href' , reactElement.props.href) ;
    domElement.setAttribute('target' , reactElement.props.target) ;

    container.appendChild(domElement) ;
    */




    // Modular 2 :
    const domElement = document.createElement(reactElement.type) ;
    domElement.innerHTML = reactElement.children ;

    for(const prop in reactElement.props)
    {
        if (prop == 'children') continue ;
        
        domElement.setAttribute(prop , reactElement.props[prop]) ;
    }

    container.appendChild(domElement) ;
}



// Step 2 : Create A Object of ReactElement !
const reactElement = {

    type : 'a' ,
    props : {
        href : 'https://google.com' , 
        target : '_blank' 
    } ,
    children : 'click me to visit google !'
}

// Step 1 : Fetching the Element by ID !
const root = document.getElementById('root') ;                  // mainContainer !

// Step 4 : Calling a Function !
customeRender(reactElement , root) ;