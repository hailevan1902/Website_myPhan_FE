import React from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { Category } from '@mui/icons-material';
import { Tab } from 'bootstrap';

CategoryList.propTypes = {
    categoryList: PropTypes.array,
};

CategoryList.defaultProps = {
    categoryList: [],
};

function CategoryList({ categoryList }) {
    return (
        <TableBody>
            {
                categoryList?.map((item, key) => (
                    <TableRow key={key}>
                        <TableCell align="left">{key + 1}</TableCell>
                        <TableCell align="center">{item.categoryCode}</TableCell>
                        <TableCell align="center">{item.categoryName}</TableCell>
                        <TableCell align="center">{item.description}</TableCell>
                        <TableCell align="center" className='btn'>
                            <a href={"/admin-detail-category/" + item.categoryId} className='btn-detail'>Chi tiết</a>
                            <span>|</span>
                            <a href="#" className='btn-delete'>Delete</a>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody >
    );
}

export default CategoryList;