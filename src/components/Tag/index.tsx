import React, { PropTypes } from 'react';
import classNames from 'classnames';


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

  handlerClick = (e,value) => {
    e && e.stopPropagation();
    const { onClick, selected } = this.props;
    onClick && onClick(value, !selected);
  }

  handlerClose = (e,value) => {
    e && e.stopPropagation();
    const { onClose } = this.props;
    onClose && onClose(value);
  }

  render() {
    const {prefixCls, value, selected, closable, className, children,...other} = this.props;
    const closeIcon = closable ? <span className={`${prefixCls}-close`} onClick={e => this.handlerClose(e, value)} /> : '';
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-selected`]: selected,
      [className]: !!className
    });
    return (
       <div 
        data-value={value}
        className={classString}
        onClick={e => this.handlerClick(e, value)}
        {...other}
      >
        <span className={`${prefixCls}-text`}>{children}</span>
        {closeIcon}
      </div>
    );
  }
}
