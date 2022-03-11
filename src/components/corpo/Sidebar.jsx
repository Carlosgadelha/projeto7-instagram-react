export default function Sidebar(){

    const sugestoes = [{imagem:'assets/img/bad.vibes.memes.svg', nome:'bad.vibes.memes', razao: 'Segue você'},{imagem: 'assets/img/chibirdart.svg', nome:'chibirdart', razao: 'Segue você'},{imagem:'assets/img/razoesparaacreditar.svg', nome: 'razoesparaacreditar', razao: 'Novo no Instagram'},{imagem: 'assets/img/adorable_animals.svg', nome: 'adorable_animals', razao: 'Segue você'},{imagem: 'assets/img/smallcutecats.svg', nome: 'smallcutecats', razao: 'Segue você'}]
    
    return(
        <div class="sidebar">
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    Catana
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestoes.map( sugestao => <Sugestao imagem = {sugestao.imagem} name = {sugestao.nome} razao = {sugestao.razao}  />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}


function Sugestao(props){
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagem} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">{props.razao}</div>
        </div>
    )
}