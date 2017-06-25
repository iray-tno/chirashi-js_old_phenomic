import React from 'react';
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client';

export default class BlogPost extends React.PureComponent {
    render() {
        const {
            page,
        } = this.props;

        return (
            <div>
                {page.node &&
                    <article>
                        <h1>{page.node.title}</h1>
                        <BodyRenderer>{page.node.body}</BodyRenderer>
                    </article>
                }
            </div>
        );
    }
}
