import React, { Component } from 'react';
import './css/react-bootstrap-table-all.min.css';
import './css/react-bootstrap-table.min.css';
import './css/App.css';
const ReactBsTable  = require('react-bootstrap-table');
const BootstrapTable = ReactBsTable.BootstrapTable;
const TableHeaderColumn = ReactBsTable.TableHeaderColumn;


let products = [{
    id: 94045596868,
    keyword: "+fragrance +hotel",
    adGroup: "USA:ENG:$:PT:AMER:USA:CA:Beach_Cities:178304:Hotel_Del_Coronado:PE7496:E:NC:",
    ctr: 10.67,
    impressions: 12313,
    clicks: 1520,
    score: 3,
    expand : [
        {
            searchKeyScore: 4,
            adScore: 7,
            pageScore: 3
        }
    ]

},
    {
        id: 169219062156,
        keyword: "[yellowstone park hotel]",
        adGroup: "USA:ENG:$:PT:AMER:USA:FL:Panama_City:6023330:Bikini_Beach_Resort_Motel:PE5204879:M:NC:",
        ctr: 12.7,
        impressions: 90875,
        clicks: 120,
        score: 6,
        expand : [
            {
                searchKeyScore: 8,
                adScore: 4,
                pageScore: 8
            }
        ]

    },

    {
        id: 106699801588,
        keyword: "+hotels +Seattle",
        adGroup: "USA:ENG:$:PT:AMER:DOM:XX:Punta_Cana:601906:Hard_Rock_Hotel_&_Casino_Punta_Cana_All_Inclusive:PE2464251:M:NC:",
        ctr: 0.53,
        impressions: 40275,
        clicks: 4520,
        score: 8,
        expand : [
            {
                searchKeyScore: 6,
                adScore: 8,
                pageScore: 9
            }
        ]

    },

    {
    id: 94045148308,
    keyword: "[yosemite gold country lodge coulterville ca]",
    adGroup: "USA:ENG:$:DT:AMER:USA:FL:Orlando:178294:Kissimmee:7927:E:NC:hotel:",
    ctr: 10.98,
    impressions: 9075,
    clicks: 120,
    score: 4,

        expand : [
            {
                searchKeyScore: 4,
                adScore: 7,
                pageScore: 3
            }
        ]
}];

class BSTable extends Component {
    render() {
        if (this.props.data) {
            return (
                <BootstrapTable data={ this.props.data }
                condensed
                bordered>
                    <TableHeaderColumn dataField='searchKeyScore' dataAlign="center" isKey={ true } thStyle={ { background: '#5DADE2'}} columnClassName={ columnClassNameFormat }>Search Query - Keyword Mapping Score</TableHeaderColumn>
                    <TableHeaderColumn dataField='adScore' dataAlign="center" thStyle={ { background: '#5DADE2' } } columnClassName={ columnClassNameFormat }>Ad Score</TableHeaderColumn>
                    <TableHeaderColumn dataField='pageScore' dataAlign="center" thStyle={ { background: '#5DADE2'} } columnClassName={ columnClassNameFormat }>Landing Page Score</TableHeaderColumn>
                </BootstrapTable>);
        } else {
            return (<p>?</p>);
        }
    }
}

export default class ExpandRow extends Component {

    static isExpandableRow(row) {
        return row.score < 11;
    }

    static expandComponent(row) {
        return (
            <BSTable data={ row.expand } />
        );
    }


    render() {
        const options = {
            expandRowBgColor: '#AED6F1',
            expandBy: 'column',
            onRowDoubleClick: function (row) {
                window.location = '/ad/' +row.id ;
            },
            clearSearch: true
        };
        return (
            <BootstrapTable data={ products }
                            options={ options }
                            expandableRow={ ExpandRow.isExpandableRow }
                            expandComponent={ ExpandRow.expandComponent }
                            search
                            hover
                            striped={true}
                            pagination
                            condensed
                            multiColumnSearch
                            bordered
                            ignoreSinglePage
                            headerStyle={ { background: '#5DADE2' } }
                            containerStyle={{overflowX: 'scroll'}}>

                <TableHeaderColumn isKey dataField='id'  dataAlign="center" dataSort width="9%" expandable={false}>Ad ID</TableHeaderColumn>
                <TableHeaderColumn  dataField='keyword'  dataAlign="center" dataSort width="20%" expandable={false}>Keyword Triggered</TableHeaderColumn>
                <TableHeaderColumn dataField='adGroup'  dataAlign="center" dataSort width="30%" expandable={false}>Ad Group</TableHeaderColumn>
                <TableHeaderColumn dataField='ctr'  dataAlign="center" dataSort width="5%" expandable={false}>CTR</TableHeaderColumn>
                <TableHeaderColumn dataField='impressions'  dataAlign="center" dataSort width="8%" expandable={false}>Impressions</TableHeaderColumn>
                <TableHeaderColumn dataField='clicks'  dataAlign="center" dataSort width="7%" expandable={false}>Clicks</TableHeaderColumn>
                <TableHeaderColumn dataField='score'  dataAlign="center" dataSort width="9%" columnClassName={ columnClassNameFormat }>Overall Score</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

function columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    // fieldValue is column value
    // row is whole row object
    // rowIdx is index of row
    // colIdx is index of column

    if(fieldValue >= 8 && fieldValue <= 10){
        return 'green-score';
    }
    else if(fieldValue >= 5 && fieldValue <= 7){
        return 'orange-score';
    }
    else {
        return 'red-score';
    }
}
