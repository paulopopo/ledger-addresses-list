//@flow

import React from 'react';
import ReactTable from 'react-table';
import { AddressShort } from '/types';
import { Icon } from 'semantic-ui-react';
import { withi18n } from '/connectors';
type TableType = {
    data: Array<AddressShort>,
    onUpdate: function,
    onDelete: function,
};

const columns = (onUpdate: function, onDelete: function, t: function) => [
    {
        Header: t('Listing.name'),
        accessor: 'name',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: t('Listing.currency'),
        accessor: 'currencyId',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: t('Listing.address'),
        accessor: 'address',
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
    },
    {
        Header: t('Listing.actions'),
        headerStyle: { whiteSpace: 'unset' },
        style: { whiteSpace: 'unset' },
        Cell: row => (
            <div>
                <Icon onClick={() => onUpdate(row.original)} color="green" name="edit" />
                <Icon onClick={() => onDelete(row.original.name)} color="red" name="trash" />
            </div>
        ),
    },
];

/**
 *
 * @param data {Array<AddressShort>} Array of addresses that will be display in the table
 * @param onUpdate {function} callback function when clicking on edit action button
 * @param onDelete {function} callback function when clicking on delete action button
 * @returns {ReactComponent}
 */
const Table = ({ t, data, onUpdate, onDelete }: TableType) => {
    return (
        <ReactTable
            minRows={1}
            pageSize={5}
            data={data}
            showPageSizeOptions={false}
            columns={columns(onUpdate, onDelete, t)}
            showPagination={true}
        />
    );
};

Table.defaultProps = {
    data: [],
    onUpdate: () => {},
    onDelete: () => {},
};

export default withi18n(Table);
