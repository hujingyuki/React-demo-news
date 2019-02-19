/*
 * @Author: jinghu5 
 * @Date: 2019-02-19 16:18:53 
 * @Last Modified by: jinghu5
 * @Last Modified time: 2019-02-19 16:35:50
 */
import React from 'react';
import PropTypes from 'prop-types';

class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    //注意这里，使用Promise对象; mod.default导出默认
    props.load().then((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

Bundle.propTypes = {
  load: PropTypes.func,
  children: PropTypes.func
};

export default Bundle;