import React, { PureComponent } from 'react';
import { connect } from 'dva';


import { Rate } from 'antd';


import styles from './Test.less';


@connect(state => ({
  monitor: state.monitor,
}))
export default class Monitor extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'monitor/fetchTags',
    });
  }

  render() {
    const { monitor } = this.props;
    const { tags } = monitor;

    return (
      <div>

        <Rate allowHalf defaultValue={2.5} />


      </div>
    );
  }
}
