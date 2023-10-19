import { linkIcon } from '../assets';
import { Article } from '../types'

type SearchBarProps = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    article: Article;
    setArticle: React.Dispatch<React.SetStateAction<Article>>;
    handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const SearchBar = ({ article, setArticle, onSubmit, handleKeyDown, ...props }: SearchBarProps) => {
    return (
        <form className='relative flex justify-center' onSubmit={onSubmit} {...props}>
            <img src={linkIcon} alt="link_icon" className='absolute left-0 my-[0.65rem] ml-3 w-5' />

            <input
                type='url' placeholder='Enter a URL'
                value={article.url} onChange={(e) => setArticle({ ...article, url: e.target.value })}
                className='url_input peer' onKeyDown={handleKeyDown}
                required
            />

            <button
                type='submit'
                className='submit_btn peer-focus:border-gray-700 peer-text:text-gray-700'
            >
                <p>↵</p>
            </button>
        </form>
    )
}

export default SearchBar