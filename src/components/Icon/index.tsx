import React from 'react';
import classNames from 'classnames';
import '../style/index.less';

export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  style?: React.CSSProperties;
}

const Icon = (props: IconProps) => {
  const { type, className = '', spin } = props;
  const classString = classNames(className,{
    anticon: true,
    'anticon-spin': !!spin || type === 'loading',
    [`anticon-${type}`]: true,
  });
  const effectProps = {...props};
  delete effectProps.type;
  delete effectProps.spin;
  delete effectProps.className;
  return <i {...effectProps} className={classString} />;
};

export default Icon;
