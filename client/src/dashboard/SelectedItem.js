import React from 'react'
import MenuList from './MenuList';
import { connect } from 'react-redux';

const SelectedItem = ({ page: { pageId } }) => {

    return (
        <React.Fragment>
            {MenuList.list[pageId]}
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    page: state.page
})
export default connect(mapStateToProps)(SelectedItem);