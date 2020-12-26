import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

//import components
import MenuItem from '../menu-item/menu-item.component';

//import selectors
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import './directory.style.scss';

const Directory = ({sections}) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...OtherSectionProps}) => (

                    <MenuItem key = {id} {...OtherSectionProps} />
                ))
            }
        </div> 
    )
}


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);