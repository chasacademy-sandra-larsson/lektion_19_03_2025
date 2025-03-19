// En server-komponent som fetchar från Newsdata.io
// Fetch är inbyggt i server-komponenter
import Search from "./search"

export default async function News() {


    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.NEWS_API_KEY}&q=tesla&country=se`)

    const data = await response.json();

    const news = data.results;

   console.log("latest news", news)



    return(
        <main>
            <h1>News</h1>
            <Search news={news}/>
              
        </main>
    )


}
