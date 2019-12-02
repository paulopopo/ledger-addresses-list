//@flow

import React from 'react';
import ReactTable from 'react-table';
import { AddressShort } from './types';

type TableType = {
    data: Array<AddressShort>,
    onUpdate: function,
    onDelete: function
};
const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'Currency',
        accessor: 'currencyId',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: 'Address',
        accessor: 'address',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
];

/**
 *
 * @param data {Array<AddressShort>} Array of addresses that will be display in the table
 * @param onUpdate {function} callback function when clicking on edit action button
 * @param onDelete {function} callback function when clicking on delete action button
 * @returns {*}
 * @constructor
 */
const Table = ({ data, onUpdate, onDelete }: TableType) => {
    return (
        <div style={{ padding: '50px' }}>
            <ReactTable manual minRows={0} pageSize={1} data={data} columns={columns} pages={0} showPagination={true} />
        </div>
    );
};

Table.defaultProps = {
    data: [],
    onUpdate: () => {},
    onDelete: () => {},
};

export default Table;
