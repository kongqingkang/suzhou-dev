import React from 'react';
import {Row, Col, Card } from 'antd';

const titleList = [
  {key: '1', value: '第一产业'},
  {key: '2', value: '第二产业'},
  {key: '3', value: '第三产业及居民生活'},
];

export default class Company extends React.Component {

  state = {
    flag: 1
  }

  /**
   * 切换产业
   * @param val
   */
  changeTitle = (val) => {
    alert(val)
    this.setState({
      flag: val
    })
  }

  render() {

    return (
      <div>
        <br />
        <Card bordered={false} title="实时数据统计" size={"small"}>
          <Row gutter={[16,16]}>
            <Col span={8} >
              <Card bordered>
              </Card>

            </Col>
            <Col span={8}  >
              <Card bordered>
              </Card>
            </Col>
            <Col span={8}>
              <Card bordered>
              </Card>
            </Col>
          </Row>
        </Card>
        <br />
        <Card bordered={false}  title='能源结构趋势分析'>
          <Row>
            <Col span={24}>
              <Card bordered={false} >
              </Card>
            </Col>
          </Row>
        </Card>
        <br />
        <Card bordered={false}
              title='分产业的用能结构'
              extra={
                <div>
                  {
                    titleList.map( item => {
                      if (this.state.flag === item.key){
                        return <a onClick={() => this.changeTitle(item.key)} style={{paddingLeft: 5}}>{item.value}</a>
                      }
                      // eslint-disable-next-line react/jsx-key
                        return <a onClick={() => this.changeTitle(item.key)} style={{color: "black", paddingLeft: 5}}>{item.value}</a>

                    })
                  }
                </div>
              }
        >
          <Row>
            <Col span={24}>
              <Card bordered={false} >
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}
