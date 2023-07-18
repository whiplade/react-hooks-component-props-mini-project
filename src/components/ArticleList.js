import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    return(
        <main>
            {posts.map(article => {
                return (
                    <Article key={article.id}></Article>
                )
            })}
        </main>
    )
}
export default ArticleList
