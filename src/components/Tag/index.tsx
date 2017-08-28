import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import './style/index.less';


export interface TagProps {
  prefixCls?: string;
  value?: any;
  /** 标签是否能关闭 */
  closable?: boolean;
  /** 标签是否选中 */
  selected?: boolean;
  /** 点击时的回调 */
  onClick?:Function;
  /** 关闭时的回调 */
  onClose?: Function;
  className?: string;
  children?: any;
}

export default class Tag extends React.Component<TagProps, any> {
  static defaultProps = {
    prefixCls: 'wl-tag',
    selected: false,
    closable: true,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    value: PropTypes.any.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    selected: PropTypes.bool,
    closable: PropTypes.bool,
  };
  
  constructor(props: TagProps) {
    super(props);

    this.state = {
      closed: false,
    };
  }

  handlerClick = (e,value) => {
    e && e.stopPropagation();
    const { onClick, selected } = this.props;
    onClick && onClick(value, !selected);
  }

  handlerClose = (e: React.MouseEvent<HTMLElement>) => {
    e && e.stopPropagation();
    const { onClose } = this.props;
    onClose && onClose(e);
    this.setState({closed: true});
  }

  render() {
    const { closed } = this.state;
    const {prefixCls, value, selected, closable, className, children,onClose,...otherProps} = this.props;
    const closeIcon: any = closable ? <Icon type="cross" onClick={this.handlerClose} /> : '';
    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-selected`]: selected,
      [`${prefixCls}-closed`]: closed
    });
    return (
       <div 
        data-value={value}
        {...otherProps}
        className={classString}
        onClick={e => this.handlerClick(e, value)}
      >
        <span className={`${prefixCls}-text`}>{children}</span>
        {closeIcon}
      </div>
    );
  }
}
