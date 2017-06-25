import {
    createContainer,
    query,
} from '@phenomic/preset-react-app/lib/client';

import BlogPost from './BlogPost';

const BlogPostContainer = createContainer(BlogPost, (props) => {
    return ({
        page: query({
            collection: 'posts',
            id: props.params.splat,
        }),
    });
});

 export default BlogPostContainer;
