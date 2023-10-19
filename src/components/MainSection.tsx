import { useEffect, useState } from 'react'

import { useLazyGetSummaryQuery } from '../services/article';
import { Article } from '../types';
import SearchBar from './SearchBar';
import BrowseUrlHistory from './BrowseUrlHistory';
import DisplayResult from './DisplayResult';

const MainSection = () => {
    const [article, setArticle] = useState<Article>({
        url: "",
        summary: "",
    });
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articlesFromLocalStorage = localStorage.getItem("articles");

        if (articlesFromLocalStorage) {
            setAllArticles(JSON.parse(articlesFromLocalStorage));
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();

        const existingArticle = allArticles.find(
            (item: any) => item.url === article.url
        );

        if (existingArticle) return setArticle(existingArticle);

        const { data } = await getSummary({ articleUrl: article.url });
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle, ...allArticles];

            // update state and local storage
            setArticle(newArticle);
            setAllArticles(updatedAllArticles);
            localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const isValidUrl = article.url.includes("https://") || article.url.includes("http://");
        if (e.key === "Enter" && isValidUrl) {
            handleSubmit(e);
        }
    };

    return (
        <section className='mt-16 w-full max-w-xl'>
            {/* Search */}
            <div className='flex flex-col w-full gap-2'>
                <SearchBar article={article} setArticle={setArticle} onSubmit={handleSubmit} handleKeyDown={handleKeyDown} />

                <BrowseUrlHistory articles={allArticles} setArticle={setArticle} />
            </div>

            <DisplayResult article={article} isFetching={isFetching} error={error} />
        </section>
    )
}

export default MainSection