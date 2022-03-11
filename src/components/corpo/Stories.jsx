
export default function Stories(){

    const stories = [{imagem: "assets/img/9gag.svg",name: '9gag'},{imagem: 'assets/img/meowed.svg',name: 'meowed'},{imagem: 'assets/img/barked.svg',name: 'barked'},{imagem: 'assets/img/nathanwpylestrangeplanet.svg',name: 'nathanwpylestrangeplanet'},{imagem: 'assets/img/wawawicomics.svg',name: 'wawawicomics'},{imagem: 'assets/img/respondeai.svg',name: 'respondeai'},{imagem: 'assets/img/filomoderna.svg',name: 'filomoderna'},{imagem: 'assets/img/memeriagourmet.svg',name: 'memeriagourmet'}]

    return(
        
        <div class="stories">

            { stories.map( story =>  <Story imagem = {story.imagem}  nome = {story.name} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
            
        </div>
    )
    
}

function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src= {props.imagem}/>
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
}

