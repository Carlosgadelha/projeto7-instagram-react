export default function Posts(){
    const posts = [{imagem:'assets/img/meowed.svg', name: 'meowed', conteudo: 'assets/img/gato-telefone.svg', curtidasImagem: 'assets/img/respondeai.svg', curtidasName:'respondeai', curtidasQuantidade: 101.523 },{imagem:'assets/img/barked.svg', name: 'barked', conteudo: 'assets/img/dog.svg', curtidasImagem: 'assets/img/adorable_animals.svg', curtidasName:'adorable_animals', curtidasQuantidade: 99.159 }]
    
    return(
        <div class="posts">
            
            { posts.map( post => <Post imagem = {post.imagem} name = {post.name} conteudo = {post.conteudo}  curtidasImagem = {post.curtidasImagem} curtidasName = {post.curtidasName} curtidasQuantidade = {post.curtidasQuantidade}/> )}
  
        </div>
    )

}

function Post(props){

    return(

        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src= {props.imagem} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidasImagem} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidasName}</strong> e <strong>outras {props.curtidasQuantidade} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
    
}