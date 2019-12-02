//@flow

import React from 'react';
import ReactTable from 'react-table';
import { AddressShort } from '/types';

type TableType = {
    data: Array<AddressShort>,
    onUpdate: function,
    onDelete: function
};

const ActionsCell = ({data,  onUpdate, onDelete }) => (
   <div>
       <button onClick={()=> onUpdate(data)}> Edit</button>
       <button onClick={()=> onDelete(data.name)}> Delete</button>
   </div>
);
const columns = (onUpdate, onDelete ) => [
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
    },  {
        Header: 'Actions',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
        Cell : row => <ActionsCell data={row.original}  onUpdate={onUpdate}  onDelete={onDelete} />
    },
];



/**
 *
 * @param data {Array<AddressShort>} Array of addresses that will be display in the table
 * @param onUpdate {function} callback function when clicking on edit action button
 * @param onDelete {function} callback function when clicking on delete action button
 * @returns {ReactComponent}
 */
const Table = ({ data, onUpdate, onDelete }: TableType) => {


    return (
        <div style={{ padding: '50px' }}>
            <ReactTable manual minRows={0} pageSize={1} data={data} columns={columns(onUpdate, onDelete)} pages={0} showPagination={true} />
        </div>
    );
};

Table.defaultProps = {
    data: [],
    onUpdate: () => {},
    onDelete: () => {},
};

export default Table;
