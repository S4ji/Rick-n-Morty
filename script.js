let container = document.querySelector('section')
let divPagination = document.querySelector('#pagination')

async function displayAllCharacters(url='https://rickandmortyapi.com/api/character') {
    container.innerHTML=``
    divPagination.innerHTML=``
    const reponse = await fetch(url)
    const characters = await reponse.json()
    console.log(characters)
    
    characters.results.map((character)=>{
        const characterCard = document.createElement('div')
        characterCard.classList.add('card')
        characterCard.innerHTML = `
        <img class="logo" src="${character.image}" alt="">
        <h3>${character.name}</h3>
        <h4>${character.status}</h4>
        <p>${character.species}</p>`
        container.append(characterCard) 

    })

        if(url!='https://rickandmortyapi.com/api/character'&&url!='https://rickandmortyapi.com/api/character?page=1'){
            const paginationPrevious = document.createElement('button')
            paginationPrevious.classList.add('arrows')
            paginationPrevious.innerHTML = `-`
            divPagination.append(paginationPrevious)
            paginationPrevious.onclick=()=>{
            displayAllCharacters(characters.info.prev)
        }
        
        }
 
        const paginationNext = document.createElement('button')
        paginationNext.classList.add('arrows')
        paginationNext.innerHTML = `+`
        divPagination.append(paginationNext)
        paginationNext.onclick=()=>{displayAllCharacters(characters.info.next)}

        
        

        
      
            
     
}

displayAllCharacters()

