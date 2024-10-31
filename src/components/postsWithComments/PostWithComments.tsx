import React, {FC} from 'react';

import {PostWithCommentsType} from "../../model/PostWithCommentsType";



interface IProps{
    items: PostWithCommentsType[]
}


const PostWithComments: FC <IProps> = ({items}) => {

    return (
        <div>

            {items.map((item) => <div key={item.id}>
                {item.title}
                <ul>

                        {item.comments.map(commment => (<li>
                            {commment.body}
                        </li>))}

                </ul>
            </div> )}


        </div>
    );
};

export {PostWithComments};