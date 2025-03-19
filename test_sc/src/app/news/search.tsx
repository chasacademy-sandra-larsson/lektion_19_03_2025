"use client" // en komponent som körs på klienten
import {useState} from "react";



export default function Search({news}: {news: any}) {
    const [search, setSearch] = useState("");

    const filteredNews = news.filter((article: any) => search === "" || article.description.toLowerCase().includes(search.toLowerCase() ));
    

    return (
        <section>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        {filteredNews.map((article: any) => {
            return (

                    <article key={article.title}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <img src={article.image_url}/>
                     </article>)
         })}
         </section>

    )


}
