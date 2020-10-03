import React from 'react';
import {withRouter} from "react-router-dom"
import { connect } from 'react-redux';

import {
    Card, CardActionArea, CardContent
} from '@material-ui/core';

const Series = (props) => {
    const { grouped_post_list, history } = props;
    return (
        <div className="seriesWrap">
            <ul>
            {Object.keys(grouped_post_list).map((category)=>(
                <Card className="seriesCard" key={category}>
                    <CardActionArea className="seriesContent">
                        <div className="seriesImage">
                            <img 
                                src={`https://drive.google.com/uc?export=view&id=${grouped_post_list[category][0].ImageId}`}
                                alt={category}
                                title={category}
                            />
                        </div>
                        <CardContent className="seriesInfo">
                            <span className="title">{category}</span>
                            <span className="description">{grouped_post_list[category][0].Title}</span>
                            {grouped_post_list[category].length>1?
                            <span className="count">외{grouped_post_list[category].length - 1}개</span>
                            :<span></span>
                            }
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
            </ul>
        </div>
    )
}
export default connect(state => ({
    grouped_post_list: state.grouped_post_list
}))(withRouter(Series));
