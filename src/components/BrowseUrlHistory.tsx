import { useState } from 'react'
import { Article } from '../types';
import { copy, tick } from '../assets';

type BrowseUrlHistoryProps = {
    articles: Article[];
    setArticle: React.Dispatch<React.SetStateAction<Article>>;
}

const BrowseUrlHistory = ({ articles, setArticle }: BrowseUrlHistoryProps) => {
    const [copied, setCopied] = useState("");

    const handleCopy = (copyUrl: string) => {
        setCopied(copyUrl);
        navigator.clipboard.writeText(copyUrl);
        setTimeout(() => setCopied(""), 3000);
    };

    return (
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
            {articles.reverse().map((item, index) => (
                <div
                    key={`link-${index}`}
                    onClick={() => setArticle(item)}
                    className='link_card'
                >
                    <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                        <img
                            src={copied === item.url ? tick : copy}
                            alt={copied === item.url ? "tick_icon" : "copy_icon"}
                            className='w-[40%] h-[40%] object-contain'
                        />
                    </div>
                    <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                        {item.url}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default BrowseUrlHistory