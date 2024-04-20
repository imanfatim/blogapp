import { Link } from 'react-router-dom';
import articles from './Article-content';

const ArticlesListPage = () => {
    return (
        <div className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
    
        <h1 className='text-center m-10 font-bold text-2xl'>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="text-center font-sans" to={`/articles/${article.name}`}>
                <h3 className=' m-8 text-black '>{article.title}</h3>
                  <div className='px-72'>
                </div>
                <hr />
            </Link>
        ))}
        
        </div>
    );
}

export default ArticlesListPage;