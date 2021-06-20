const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- originais da netflix
- recomendados/destaques (trending)
- Em alta (top rated)
- ação
- cómedia
- terror
- romance
- documentários
*/

/*
async função de requisição para um serviço externo
em baixo traz a resposta e preenche nos items abaixos
*/

const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


// eslint-disable-next-line
export default {
    getHomeList: async () => {
        return[
          {
            slug: 'originals',
            tittle: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'trending',
            tittle: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'toprated',
            tittle: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'action',
            tittle: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'Commedy',
            tittle: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
          },
          {
            slug: 'horror',
            tittle: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'romance',
            tittle: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
         },
         {
            slug: 'documentary',
            tittle: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
          },
     ];
    }
}