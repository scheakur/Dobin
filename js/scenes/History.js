import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import moment from 'moment';
import { SceneWithMenu, Task } from '../components';
import { COLOR_GRAY } from '../const';


const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: COLOR_GRAY,
    paddingLeft: 5,
    paddingTop: 5,
  },
  text: {
    color: '#333',
  },
});


class History extends Component {

  constructor(...args) {
    super(...args);

    this.renderRow = this.renderRow.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);

    const ds = new ListView.DataSource({
      getSectionHeaderData: (data, sectionId) => data[sectionId],
      getRowData: (data, sectionId, rowId) => data[sectionId][rowId],
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const [props] = args;

    this.state = {
      dataSource: ds.cloneWithRows(props.history),
    };
  }


  buildDataSource() {
    const { history } = this.props;
    const sectionIds = Object.keys(history);
    const rowIds = Object.keys(history).map(key => history[key].map((_, index) => index));
    return this.state.dataSource.cloneWithRowsAndSections(history, sectionIds, rowIds);
  }


  renderSectionHeader(day, sectionId) {
    const date = moment(sectionId).format('YYYY/M/D (ddd)');

    return (
      <View style={styles.sectionHeader} key={`section-${sectionId}`}>
        <Text style={styles.text}>{date}</Text>
      </View>
    );
  }


  renderRow(task, sectionId, rowId) {
    return (
      <Task
        {...task}
        key={`task-${sectionId}-${rowId}`}
        checked
        readonly
      />
    );
  }


  renderList() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.buildDataSource()}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
    );
  }


  render() {
    return (
      <SceneWithMenu title="History" navigator={this.props.navigator}>
        {this.renderList()}
      </SceneWithMenu>
    );
  }

}


History.propTypes = {
  navigator: PropTypes.object,
  history: PropTypes.object,
};


export default connect(
  ({ tasks }) => ({ history: tasks.history }),
  null
)(History);

