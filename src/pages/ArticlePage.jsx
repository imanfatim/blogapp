import { useParams } from 'react-router-dom';
import articles from './Article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    return (
        <>
        <h1 className=' text-2xl my-5 pl-8'>{article.title}</h1>
        {article.content.map(paragraph => (
            <p className=' '>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;