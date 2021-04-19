import React, { PropsWithChildren } from 'react';
import { Collapse } from 'antd';
import ArrowIcon from '../media/icons/arrow';
import ArrowUnfold from '../media/icons/arrowUnfold';

const { Panel } = Collapse;

interface IComponentState {
  open: boolean;
}

type AllProps = PropsWithChildren<IComponentProps>;

export class CustomCollapse extends React.Component<AllProps, IComponentState> {
  state = {
    open: false
  };

  render() {
    const { open } = this.state;
    return (
      <Collapse
        className="custom-collapse"
        bordered={false}
        onChange={this.onChange}
        expandIcon={() => (open ? <img src={ArrowIcon} alt="close-info" /> : <img src={ArrowUnfold} alt="open-info" />)}
      >
        <Panel
          header={
            open ? (
              <div className="application-info__icon-text">Open</div>
            ) : (
              <div className="application-info__icon-text">Close</div>
            )
          }
          key="1"
        >
          {this.props.children}
        </Panel>
      </Collapse>
    );
  }

  onChange = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };
}
export default CustomCollapse;